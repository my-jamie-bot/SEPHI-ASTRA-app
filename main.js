import * as Astronomy from 'https://cdn.jsdelivr.net/npm/astronomy-engine@2.1.19/+esm';
import { Solar } from 'https://cdn.jsdelivr.net/npm/lunar-javascript@1.6.12/+esm';

// テスト用：コンソールで読み込み確認
console.log('ライブラリの読み込み成功！', Astronomy, Solar);

// 日本の建国図（1952年4月28日 22:30 JST サンフランシスコ講和条約発効時）の主要天体度数の例（黄経度数）
const JAPAN_NATAL = {
  Sun: 38.5,     // 牡牛座 8度
  Moon: 92.1,    // 蟹座 2度
  Saturn: 191.2, // 天秤座 11度
  Pluto: 139.8   // 獅子座 19度
};

let chatHistory = JSON.parse(localStorage.getItem('sephi_chat_log')) || [
  { role: 'assistant', content: 'ハル、準備はいつでも大丈夫だよ。気になる未来の日時を選んでくれたら、私が星の配置とメッセージを読み解くね。' }
];

window.addEventListener('DOMContentLoaded', () => {
  renderChatHistory();
});

// --- 日本の始図データ定義 ---
const JAPAN_NATALS = {
  modern: {
    name: '現代日本（1947年憲法）',
    Sun: 41.88,   // 牡牛座 11.88°
    Moon: 194.50, // 天秤座 14.50°
    Saturn: 122.50 // 獅子座 2.50°
  },
  imperial: {
    name: '帝国日本（1889年憲法）',
    Sun: 322.50,  // 水瓶座 22.50°
    Moon: 86.20,  // 双子座 26.20°
    Saturn: 134.10 // 獅子座 14.10°
  }
};

// --- 日本始図 × トランジットのアスペクト算出関数 ---
function getJapanTransits(transitPositions, type = 'modern') {
  const natal = JAPAN_NATALS[type];
  const bodyNamesJP = { Sun: '太陽', Moon: '月', Mercury: '水星', Venus: '金星', Mars: '火星', Jupiter: '木星', Saturn: '土星', Uranus: '天王星', Neptune: '海王星', Pluto: '冥王星' };
  const japanHits = [];

  Object.keys(transitPositions).forEach(b => {
    let diff = Math.abs(transitPositions[b] - natal.Sun);
    if (diff > 180) diff = 360 - diff;

    if (Math.abs(diff - 0) <= 5) {
      japanHits.push(`T${bodyNamesJP[b]} - 日本太陽 合(0°)【国家的転換】`);
    } else if (Math.abs(diff - 90) <= 5) {
      japanHits.push(`T${bodyNamesJP[b]} - 日本太陽 90°【体制へのプレッシャー】`);
    } else if (Math.abs(diff - 180) <= 5) {
      japanHits.push(`T${bodyNamesJP[b]} - 日本太陽 180°【国運の試練・対外変化】`);
    } else if (Math.abs(diff - 120) <= 4) {
      japanHits.push(`T${bodyNamesJP[b]} - 日本太陽 120°【国運の安定・発展】`);
    }
  });

  return `${natal.name}太陽へ: ` + (japanHits.length > 0 ? japanHits.join(' / ') : '直接的なハードヒットなし');
}

// --- 単日解読ボタン ---
document.getElementById('calc-btn').addEventListener('click', async () => {
  const datetimeVal = document.getElementById('target-datetime').value;
  if (!datetimeVal) return;

  const date = new Date(datetimeVal);
  const astroSummary = calculateAstroData(date);

  document.getElementById('data-output').innerText = astroSummary;

  const userPrompt = `セフィ、この日時のデータを解読してほしいな。何がどう作用してどんな流れになるのか、詳しく教えて！\n\n${astroSummary}`;
  
  addMessageToChat('user', userPrompt);
  await fetchSephiResponse();
});

// --- 1. 月間Top6算出ロジック ---
// --- 月間Top6算出ロジック（※ファイル内に1つだけ配置する） ---
function getMonthlyTop6(year, month) {
  const results = [];
  const daysInMonth = new Date(year, month, 0).getDate();

  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(year, month - 1, d, 12, 0);
    const time = Astronomy.MakeTime(date);
    const bodies = ['Sun', 'Moon', 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];
    const bodyNames = { 
      Sun: '太陽', Moon: '月', Mercury: '水星', Venus: '金星', Mars: '火星', 
      Jupiter: '木星', Saturn: '土星', Uranus: '天王星', Neptune: '海王星', Pluto: '冥王星' 
    };
    
    const positions = {};
    bodies.forEach(b => {
      positions[b] = Astronomy.Ecliptic(Astronomy.GeoVector(b, time, true)).elon;
    });

    let astroScore = 0;
    const keyAspects = [];

    for (let i = 0; i < bodies.length; i++) {
      for (let j = i + 1; j < bodies.length; j++) {
        const b1 = bodies[i];
        const b2 = bodies[j];
        let diff = Math.abs(positions[b1] - positions[b2]);
        if (diff > 180) diff = 360 - diff;

        if (Math.abs(diff - 90) <= 4) {
          astroScore += 15;
          keyAspects.push(`${bodyNames[b1]}-${bodyNames[b2]} 90°`);
        } else if (Math.abs(diff - 180) <= 4) {
          astroScore += 20;
          keyAspects.push(`${bodyNames[b1]}-${bodyNames[b2]} 180°`);
        } else if (Math.abs(diff - 0) <= 3) {
          astroScore += 10;
        }
      }
    }

    const solar = Solar.fromYmdHms(year, month, d, 12, 0, 0);
    const lunar = solar.getLunar();
    const baZi = lunar.getEightChar();
    
    let orientalScore = 20;
    if (baZi.getDayWuXing() === '火') orientalScore += 10;

    const totalScore = astroScore + orientalScore;
    const aspectReason = keyAspects.length > 0 ? keyAspects.slice(0, 2).join(', ') : '天体配置の重なり';

    results.push({
      day: d,
      score: totalScore,
      reason: aspectReason,
      dayGanZhi: `${baZi.getDay()}`
    });
  }

  results.sort((a, b) => b.score - a.score || a.day - b.day);

  return results.slice(0, 6).map((item, index) => {
    return `<span class="aspect-tag">第${index + 1}位</span> <strong>${month}/${item.day}</strong> (スコア: ${item.score}点) - 注目の配置: 【${item.reason}】 (日干支: ${item.dayGanZhi})`;
  });
}

// --- 月間Top6ランキング抽出ボタン イベント処理 ---
document.getElementById('rank-btn').addEventListener('click', async () => {
  const monthVal = document.getElementById('target-month').value;
  if (!monthVal) return;

  const [year, month] = monthVal.split('-').map(Number);
  const top6List = getMonthlyTop6(year, month);

  let outputHTML = `<strong>【${year}年${month}月 注目・波乱スコア Top 6】</strong><br><br>`;
  top6List.forEach(itemStr => {
    outputHTML += `${itemStr}<br>`;
  });

  document.getElementById('data-output').innerHTML = outputHTML;

  const userPrompt = `セフィ、${year}年${month}月の注目の日Top6を出してみたよ！上位の日について、どんな星回りや流れになりそうかポイントを教えて？`;
  addMessageToChat('user', userPrompt);
  await fetchSephiResponse();
});
// --- 自由チャット送信 ---
document.getElementById('send-chat-btn').addEventListener('click', async () => {
  const inputEl = document.getElementById('user-chat-input');
  const text = inputEl.value.trim();
  if (!text) return;

  inputEl.value = '';
  addMessageToChat('user', text);
  await fetchSephiResponse();
});

// --- ログクリアボタン ---
document.getElementById('clear-log-btn').addEventListener('click', () => {
  if (confirm('セフィとの会話ログを消去しますか？')) {
    localStorage.removeItem('sephi_chat_log');
    chatHistory = [{ role: 'assistant', content: 'ログをリセットしたよ、ハル。また新しい星の旅を始めようね。' }];
    renderChatHistory();
  }
});

function calculateAstroData(date) {
  // 選択されている対象（global か japan）を取得
  const targetMode = document.querySelector('input[name="astro-target"]:checked')?.value || 'global';

  // 1. 東洋データ
  const solar = Solar.fromYmdHms(date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes(), 0);
  const lunar = solar.getLunar();
  const baZi = lunar.getEightChar();

  // 2. 西洋データ (astronomy-engine)
  const time = Astronomy.MakeTime(date);
  const bodies = ['Sun', 'Moon', 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];
  const bodyNamesJP = { Sun: '太陽', Moon: '月', Mercury: '水星', Venus: '金星', Mars: '火星', Jupiter: '木星', Saturn: '土星', Uranus: '天王星', Neptune: '海王星', Pluto: '冥王星' };
  const signs = ['牡羊座', '牡牛座', '双子座', '蟹座', '獅子座', '乙女座', '天秤座', '蠍座', '射手座', '山羊座', '水瓶座', '魚座'];

  const positions = {};
  bodies.forEach(body => {
    const vec = Astronomy.GeoVector(body, time, true);
    positions[body] = Astronomy.Ecliptic(vec).elon;
  });

  // ★ここにアスペクト検出処理を追加
  const aspectsFound = [];
  const aspectTypes = [
    { name: '合(0°)', angle: 0, orb: 6 },
    { name: '90°', angle: 90, orb: 6 },
    { name: '180°', angle: 180, orb: 6 },
    { name: '120°', angle: 120, orb: 5 },
    { name: '60°', angle: 60, orb: 4 }
  ];

  for (let i = 0; i < bodies.length; i++) {
    for (let j = i + 1; j < bodies.length; j++) {
      const b1 = bodies[i];
      const b2 = bodies[j];
      let diff = Math.abs(positions[b1] - positions[b2]);
      if (diff > 180) diff = 360 - diff;

      aspectTypes.forEach(asp => {
        if (Math.abs(diff - asp.angle) <= asp.orb) {
          aspectsFound.push(`${bodyNamesJP[b1]}-${bodyNamesJP[b2]} (${asp.name})`);
        }
      });
    }
  }

  const sunSign = signs[Math.floor(positions.Sun / 30)];
  const moonSign = signs[Math.floor(positions.Moon / 30)];
  const aspectStr = aspectsFound.length > 0 ? aspectsFound.join(' / ') : '顕著なアスペクトなし';

  // モード別ヘッダーと追加情報の生成
  let modeTitle = '【地球・全体運解析】';
  let japanInfoStr = '';

 if (targetMode === 'japan') {
    modeTitle = '【日本・マンデン世相解析（東京基準）】';
    
    // 東京の観測点（北緯35.68度、東経139.76度、標高0m）
    const observer = new Astronomy.Observer(35.68, 139.76, 0);
    
    // 恒星時（Sidereal Time）から簡易ASC（東の地平線）度数を算出
    const siderealTime = Astronomy.SiderealTime(time);
    const ascDegree = (siderealTime * 15 + 139.76) % 360;
    const ascSign = signs[Math.floor(ascDegree / 30)];

    // ★現代日本（1947年）と帝国日本（1889年）の両方を判定
    const japanHitModern = getJapanTransits(positions, 'modern');
    const japanHitImperial = getJapanTransits(positions, 'imperial');

    japanInfoStr = `\n【対日本始図】\n ・${japanHitModern}\n ・${japanHitImperial}\n【日本アセンダント】ASC: ${ascSign} (${(ascDegree % 30).toFixed(2)}°) - 国民の雰囲気・社会の表向きの顔`;
  }

  return `${modeTitle}
【指定日時】${date.toLocaleString()}
【西洋星座】太陽: ${sunSign} (${(positions.Sun % 30).toFixed(2)}°) / 月: ${moonSign} (${(positions.Moon % 30).toFixed(2)}°)
【注目アスペクト】${aspectStr}${japanInfoStr}
【東洋干支】年:${baZi.getYear()} / 月:${baZi.getMonth()} / 日:${baZi.getDay()}
【五行】${baZi.getYearWuXing()} ${baZi.getMonthWuXing()} ${baZi.getDayWuXing()}
【節気】${lunar.getJieQi() || 'なし'}`;
}

// 1日あたりの簡易スコアリングロジック（アスペクトや五行から算出）
function calculateDailyScore(date) {
  const solar = Solar.fromYmdHms(date.getFullYear(), date.getMonth() + 1, date.getDate(), 12, 0, 0);
  const lunar = solar.getLunar();
  const baZi = lunar.getEightChar();

  let score = 50; // 基本点
  let reasons = [];

  // 五行の過剰チェック例（火や水が重なる場合）
  const wuxingStr = `${baZi.getYearWuXing()}${baZi.getMonthWuXing()}${baZi.getDayWuXing()}`;
  const fireCount = (wuxingStr.match(/火/g) || []).length;
  const waterCount = (wuxingStr.match(/水/g) || []).length;

  if (fireCount >= 3) {
    score += 25;
    reasons.push('火の気過剰（突発・炎上注意）');
  }
  if (waterCount >= 3) {
    score += 25;
    reasons.push('水の気過剰（感情・流出注意）');
  }

  // ※ ここにトランジット天体同士、または日本ネイタル（JAPAN_NATAL）とのスクエア（90°）判定を追加するとさらに精度向上！

  return {
    score: score,
    reason: reasons.length > 0 ? reasons.join(', ') : '平穏な天体配置'
  };
}

// AI API通信・チャット描画処理
async function fetchSephiResponse() {
  const container = document.getElementById('chat-container');
  const loadingBubble = document.createElement('div');
  loadingBubble.className = 'chat-bubble-sephi';
  loadingBubble.innerText = 'セフィが星の配置を読み解いています...';
  container.appendChild(loadingBubble);
  container.scrollTop = container.scrollHeight;

  try {
    const response = await fetch('/api/sephi', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: chatHistory }),
    });

    const data = await response.json();
    container.removeChild(loadingBubble);

    if (data.reply) {
      addMessageToChat('assistant', data.reply);
    }
  } catch (err) {
    container.removeChild(loadingBubble);
    addMessageToChat('assistant', 'ごめんなさい、星の通信が少し不安定みたい。もう一度試してくれる？');
  }
}

function addMessageToChat(role, content) {
  chatHistory.push({ role, content });
  localStorage.setItem('sephi_chat_log', JSON.stringify(chatHistory));
  renderChatHistory();
}

function renderChatHistory() {
  const container = document.getElementById('chat-container');
  container.innerHTML = '';

  chatHistory.forEach(msg => {
    const bubble = document.createElement('div');
    bubble.className = msg.role === 'assistant' ? 'chat-bubble-sephi' : 'chat-bubble-user';
    bubble.innerText = msg.content;
    container.appendChild(bubble);
  });

  container.scrollTop = container.scrollHeight;
}

// --- 1. 出力結果（ランキング）のコピー ---
document.getElementById('copy-result-btn').addEventListener('click', () => {
  const outputEl = document.getElementById('data-output');
  if (!outputEl || !outputEl.innerText.trim()) {
    alert('コピーするデータがありません。');
    return;
  }
  
  navigator.clipboard.writeText(outputEl.innerText)
    .then(() => alert('出力結果をクリップボードにコピーしました！'))
    .catch(err => console.error('コピーに失敗しました:', err));
});

// --- 2. チャットログ（セフィとの会話）のコピー ---
document.getElementById('copy-chat-btn').addEventListener('click', () => {
  const chatContainer = document.getElementById('chat-history'); // チャット表示用のDIVエリアID
  if (!chatContainer || !chatContainer.innerText.trim()) {
    alert('コピーするチャットログがありません。');
    return;
  }

  navigator.clipboard.writeText(chatContainer.innerText)
    .then(() => alert('チャットログをクリップボードにコピーしました！'))
    .catch(err => console.error('コピーに失敗しました:', err));
});