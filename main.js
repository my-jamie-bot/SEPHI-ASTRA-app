import * as Astronomy from 'https://cdn.jsdelivr.net/npm/astronomy-engine@2.1.19/+esm';
import { Solar } from 'https://cdn.jsdelivr.net/npm/lunar-javascript@1.6.12/+esm';

// コンソールで読み込み確認
console.log('ライブラリの読み込み成功！', Astronomy, Solar);

// ==========================================================================
// 1. サビアンシンボル・データ辞書 (SABIAN_DICTIONARY)
// ==========================================================================
const SABIAN_DICTIONARY = {
  "牡羊座１度": "女性が水から上がり、アザラシも上がり彼女を抱く",　
"牡羊座２度": "グループを楽しませているコメディアン",
"牡羊座３度": "彼の祖国の形をした男の横顔の浮き彫り",
"牡羊座４度": "隔離された歩道を歩く二人の恋人",
"牡羊座５度":"羽のある三角 ",
"牡羊座６度":"一辺が明るく照らされた四角 ",
"牡羊座７度":"２つの領域でうまく自己表現している男 ",
"牡羊座８度":"東に向いてなびいているリボンをつけた大きな帽子 ",
"牡羊座９度":"水晶を凝視する人 ",
"牡羊座１０度":"古い象徴に対して新しい形を教える男 ",
"牡羊座１１度":"国の支配者 ",
"牡羊座１２度":"野生の鴨の群れ ",
"牡羊座１３度":"成功しなかった爆弾の爆破",
"牡羊座１４度":"男と女のそばでとぐろを巻く蛇",
"牡羊座１５度":"毛布を編むインディアン",
"牡羊座１６度":"日の入りに踊っている妖精ブラウニー",
"牡羊座１７度":"２人のしかめつらした独身女性",
"牡羊座１８度":"空のハンモック",
"牡羊座１９度":"魔法のじゅうたん",
"牡羊座２０度":"冬に鳥に餌をやる若い少女",
"牡羊座２１度":"リングに上がる拳闘士",
"牡羊座２２度":"欲望の庭に続く門",
"牡羊座２３度":"重く価値があるがベールに隠された荷を運ぶパステルカラーの服を着た女",
"牡羊座２４度":"開いた窓と豊穣の角の形に吹き上げられたカーテン",
"牡羊座２５度":"二重の約束",
"牡羊座２６度":"持ちきれないほどの贈り物を所有する男",
"牡羊座２７度":"想像の中で復活された失われた機会",
"牡羊座２８度":"落胆させられた大聴衆",
"牡羊座２９度":"天球の合唱隊が歌っている",
"牡羊座３０度":"アヒルの池とその雛",
"牡牛座１度":"清らかな山の小川",
"牡牛座２度":"電気的な嵐",
"牡牛座３度":"クローバーが咲いている芝地に足を踏み入れる",
"牡牛座４度":"虹のたもとの金の壷",
"牡牛座５度":"開いた墓の前にいる未亡人",
"牡牛座６度":"渓谷にかけられる建設中の橋 ",
"牡牛座７度":"サマリアの女　",
"牡牛座８度":"雪がまだ降っていない時期のソリ ",
"牡牛座９度":"飾られたクリスマスツリー ",
"牡牛座１０度":"赤十字の看護婦",
"牡牛座１１度":"花に水をやる女",
"牡牛座１２度":"ウインドウショッピングをする人々",
"牡牛座１３度":"荷物を運ぶ男",
"牡牛座１４度":"模索している貝と遊んでいる子供たち",
"牡牛座１５度":"マフラーと粋なシルクハットを身につけた男",
"牡牛座１６度":"神秘を暴こうとする老人",
"牡牛座１７度":"剣とたいまつの間の戦い",
"牡牛座１８度":"バッグを窓から外へ出している女",
"牡牛座１９度":"新しく形成される大陸",
"牡牛座２０度":"雲を作り運び去る風",
"牡牛座２１度":"開いた本を指す指",
"牡牛座２２度":"荒れた水の上を飛ぶ白い鳩",
"牡牛座２３度":"宝石店",
"牡牛座２４度":"馬にまたがり骸骨の締め具をつけたインディアン",
"牡牛座２５度":"大きく手入れの行き届いた公共の公園",
"牡牛座２６度": 　"恋人にセレナーデを歌うスペイン人 ",
"牡牛座２７度": 　"ビーズを売るインディアンの女",
"牡牛座２８度": 　"成熟したロマンスに胸躍らせる女 ",
"牡牛座２９度":　"テーブルで働いている2人の靴職人",
"牡牛座３０度": 　"古代の芝地をパレードする孔雀",
"双子座１度": 　"静かな水に浮くガラス底ボート",
"双子座２度": 　"こっそりと靴下に物をつめるサンタクロース",
"双子座３度": 　"チュイルリー庭園",
"双子座４度": 　"ヒイラギとヤドリギ ",
"双子座５度": 　"過激な雑誌",
"双子座６度": 　"油田の掘削 ",
"双子座７度": 　"時代遅れの井戸 ",
"双子座８度": 　"産業労働者のストライキ ",
"双子座９度": 　"矢で満たされた矢筒",
"双子座１０度": 　"落下する飛行機 ",
"双子座１１度": 　"体験に基づいた現実主義の新しい道",
"双子座１２度": 　"生意気に自己主張する少女トプシー ",
"双子座１３度": 　"ピアノを目の前にした偉大な音楽家 ",
"双子座１４度": 　"テレパシーでの会話 ",
"双子座１５度": 　"会話をしている２人のオランダの子供 ",
"双子座１６度": 　"熱弁する婦人参政運動家 ",
"双子座１７度": 　"知力の頭に溶けていった健康の頭 ",
"双子座１８度": 　"中国語を話す２人の中国人 ",
"双子座１９度": 　"大きな古典書物 ",
"双子座２０度": 　"カフェテリア ",
"双子座２１度": 　"労働者のデモ ",
"双子座２２度": 　"バーン・ダンス ",
"双子座２３度":　　"木の高いところにある巣の中の３羽の雛 ",
"双子座２４度": 　"氷の上でスケートをする子供たち ",
"双子座２５度": 　"パームの枝を刈る男 ",
"双子座２６度": 　"森の中の冬霜 ",
"双子座２７度": 　"森から出てくるジプシー ",
"双子座２８度": 　"破産宣告された男",
"双子座２９度":　"春の最初のモッキンバード ",
"双子座３０度": 　"海水浴をする美女たち ",
"蟹座１度": 　"船に掲示される巻かれ広げられる旗 ",
"蟹座２度": 　"広く平らな場所の上につるされた男",
"蟹座３度": 　"毛深い鹿に先導される毛皮に包まれた男 ",
"蟹座４度": 　"ねずみと議論する猫 ",
"蟹座５度": 　"列車に破壊された自動車",
"蟹座６度": 　"巣を作る猟鳥",
"蟹座７度": 　"月明かりの夜の二人の妖精 ",
"蟹座８度": 　"服を着てパレードするウサギたち ",
"蟹座９度": 　"水の中の魚へと手を伸ばす小さな裸の少女 ",
"蟹座１０度": 　"完全にカットされていない大きなダイヤモンド   ",
"蟹座１１度": 　"しかめっ面をするピエロ",
"蟹座１２度": 　"メッセージを持った赤ん坊をあやす中国人の女",
"蟹座１３度": 　"とても目立つ親指で少し曲げられた一つの手",
"蟹座１４度": 　"東北の大きな暗い空間に向いているとても年をとった男 ",
"蟹座１５度": 　"豪華な食事を楽しんだグループの人々 ",
"蟹座１６度": 　"手書きの巻き物を目の前にして広場の前にいる男",
"蟹座１７度": 　"知性と生命に成長にする胚芽",
"蟹座１８度": 　"ヒヨコのために土をほじくる雌鳥 ",
"蟹座１９度": 　"結婚の儀式を遂行する司祭 ",
"蟹座２０度": 　"セレナーデを歌うゴンドラ乗り ",
"蟹座２１度": 　"歌っているプリマドンナ ",
"蟹座２２度": 　"ヨットを待つ女 ",
"蟹座２３度":　　"文学会の集まり",
"蟹座２４度": 　"南に向いた太陽に照らされたところにいる女と二人の男 ",
"蟹座２５度": 　"右肩越しに突然投げられた黒い影 ",
"蟹座２６度": 　"豪華さに満足と幸せを感じ長机の前で読書している人々",
"蟹座２７度": 　"渓谷での嵐 ",
"蟹座２８度": 　"現代の少女ポカホンタス",
"蟹座２９度":　"双子の体重を測るミューズ",
"蟹座３０度": 　"アメリカ革命の娘",
"獅子座１度": 　"脳溢血の症例",
"獅子座２度": 　"おたふく風邪の伝染",
"獅子座３度": 　"髪型をボブにした女 ",
"獅子座４度": 　"正装した男と角を刈られた鹿 ",
"獅子座５度": 　"絶壁の端にある岩の塊",
"獅子座６度": 　"時代遅れの女と最先端の少女",
"獅子座７度": 　"空の星座 ",
"獅子座８度": 　"ポルシェビキプロパカンダを広める人 ",
"獅子座９度": 　"ガラス吹き ",
"獅子座１０度": 　"早朝の露 ",
"獅子座１１度": 　"大きな樫の木の下にあるブランコに乗る子供たち",
"獅子座１２度": 　"宵の芝パーティー",
"獅子座１３度": 　"揺れている年をとった船長",
"獅子座１４度": 　"表現の機会を待つ人間の魂 ",
"獅子座１５度": 　"山車 ",
"獅子座１６度": 　"嵐の後の陽光",
"獅子座１７度": 　"ベストを着ていない聖歌隊",
"獅子座１８度": 　"化学の先生",
"獅子座１９度": 　"ハウスボートパーティ ",
"獅子座２０度": 　"ズーニー族の太陽の崇拝者 ",
"獅子座２１度": 　"中毒したニワトリ ",
"獅子座２２度": 　"伝書鳩 ",
"獅子座２３度":　　"裸馬乗り",
"獅子座２４度": 　"身だしなみの整っていない男 ",
"獅子座２５度": 　"砂漠を横切る大きなラクダ ",
"獅子座２６度": 　"虹",
"獅子座２７度": 　"夜明け ",
"獅子座２８度": 　"大きな木の枝にとまるたくさんの小鳥",
"獅子座２９度":　"人魚 ",
"獅子座３０度": 　"封をされていない手紙",
"乙女座１度":  　"男の頭",　  
"乙女座２度":　　"掲げられた大きな白い十字架",　
"乙女座３度":　　"保護をもたらす２人の天使",　　
"乙女座４度":　　"白人の子供たちと遊ぶ黒人の子",
"乙女座５度":　　"妖精の夢を見る男",　
"乙女座６度":　　"メリーゴーラウンド",　　
"乙女座７度":　　"ハーレム",　　
"乙女座８度":　　"最初のダンスの練習",　　
"乙女座９度":　　"未来派の絵を描く男",　　
"乙女座１０度":　　"影の向こうを覗く２つの頭 ",　
"乙女座１１度":　　"母親の期待のとおりに成長する少年",
"乙女座１２度":　　"ベールをはずされた花嫁",
"乙女座１３度":　　"政治運動を制圧する強い手",
"乙女座１４度":　　"家系図",
"乙女座１５度":　　"装飾されたハンカチーフ",
"乙女座１６度":　　"オランウータン",
"乙女座１７度":　　"噴火している火山",
"乙女座１８度":　　"ウィジャボード",
"乙女座１９度":　　"水泳競争",
"乙女座２０度":　　"キャラバン車",
"乙女座２１度":　　　"少女のバスケットボールチーム",
"乙女座２２度":　　"王家の紋章",
"乙女座２３度":　　"アニマルトレーナー",
"乙女座２４度":　　"メリーと彼女の白い羊",
"乙女座２５度":　　"半旗として掲げられた旗",
"乙女座２６度":　　"香炉を持つ少年",
"乙女座２７度":　　"お茶会をしている高貴な貴婦人",
"乙女座２８度":　　"スキンヘッドの男",
"乙女座２９度":　　"読んでいる書類から秘密の知識を得る男",
"乙女座３０度":　　"聞き取られなかった間違い電話",
"天秤座１度": 　"突き通す針により完璧にされた蝶",
"天秤座２度": 　"六番目の部族の光が七番目のものに変質する ",
"天秤座３度": 　"新しい日の夜明け、すべてが変わった",
"天秤座４度": 　"キャンプファイヤーを囲むグループ",
"天秤座５度": 　"心の内面の知恵を教える男",
"天秤座６度": 　"男の理想が多くの結晶に変わる ",
"天秤座７度": 　"ヒヨコに餌をやり、鷹から守る女",
"天秤座８度": 　"荒廃した家の中で燃え盛る暖炉 ",
"天秤座９度": 　"アートギャラリーに掛けられた３人の巨匠 ",
"天秤座１０度": 　"危険な流れを抜け安全な場所にたどり着いたカヌー ",
"天秤座１１度": 　"眼鏡ごしに覗き込んでいる教授 ",
"天秤座１２度": 　"鉱山から出てくる炭坑夫",
"天秤座１３度": 　"しゃぼん玉をふくらませている子供たち ",
"天秤座１４度": 　"正午の昼寝",
"天秤座１５度": 　"環状の道",
"天秤座１６度": 　"流されてしまった船付き場 ",
"天秤座１７度": 　"引退した船長",
"天秤座１８度": 　"逮捕された二人の男",
"天秤座１９度": 　"隠れている泥棒集団",
"天秤座２０度": 　"ユダヤ人のラビ",
"天秤座２１度": 　"海岸の群衆",
"天秤座２２度": 　"噴水で鳥に水をやる子供",
"天秤座２３度":　　"おんどり",
"天秤座２４度": 　"蝶の左側にある３番目の羽",
"天秤座２５度": 　"秋の葉の象徴が伝える情報 ",
"天秤座２６度": 　"互いに入れ替わる鷹と大きな白い鳩 ",
"天秤座２７度": 　"頭上を飛んでいる飛行機 ",
"天秤座２８度": 　"明るくなる影響の最中にいる男 ",
"天秤座２９度":　"すべての知識に橋をかけようと模索する人類",
"天秤座３０度": 　"哲学者の頭にある3つの知識のこぶ",
"蠍座１度": 　"観光バス",
"蠍座２度": 　"割れたビンとこぼれた香水",
"蠍座３度": 　"棟上げ式",
"蠍座４度": 　"火のともったろうそくを運ぶ若者",
"蠍座５度": 　"大きな岩場の海岸",
"蠍座６度": 　"ゴールドラッシュ ",
"蠍座７度": 　"深海潜水夫",
"蠍座８度": 　"湖面を横ぎって輝く月 ",
"蠍座９度": 　"歯科の仕事 ",
"蠍座１０度": 　"親睦夕食会 ",
"蠍座１１度": 　"救助される溺れた男",
"蠍座１２度": 　"大使館の舞踏会",
"蠍座１３度": 　"実験をしている発明家",
"蠍座１４度": 　"仕事をしている電話接続士",
"蠍座１５度": 　"５つの砂山のまわりで遊ぶ子供たち",
"蠍座１６度": 　"いきなり笑い出す少女の顔 ",
"蠍座１７度": 　"自分自身の子供の父である女",
"蠍座１８度": 　"豪華な秋色の森",
"蠍座１９度": 　"聴いてはしゃべっているオウム",
"蠍座２０度": 　"２つの暗いカーテンを横に引っ張っている女",
"蠍座２１度": 　"職務放棄兵士",
"蠍座２２度": 　"鴨に向かって進み出るハンター",
"蠍座２３度":　　"妖精に変容するウサギ",
"蠍座２４度": 　"一人の男の話を聴くために山から降りてきた群集",
"蠍座２５度": 　"Ｘ線",
"蠍座２６度": 　"キャンプをつくっているインディアンたち ",
"蠍座２７度": 　"行進している軍楽隊",
"蠍座２８度": 　"自分の領土に近づく妖精たちの王 ",
"蠍座２９度":　"酋長に自分の子供たちの命ごいをするインディアンの女性",
"蠍座３０度": 　"ハロウィンのわるふざけ",
"射手座１度": 　"共和主義の威厳ある軍隊のキャンプファイヤー",
"射手座２度": 　"白い波帽子に覆われた大洋",
"射手座３度": 　"チェスをする２人の男",
"射手座４度": 　"歩くことを学んでいる小さな子供",
"射手座５度": 　"木の高いところにいる老いたフクロウ",
"射手座６度": 　"クリケットゲーム ",
"射手座７度": 　"ドアをノックするキューピッド ",
"射手座８度": 　"内部で形成されている岩やその他のもの ",
"射手座９度": 　"階段で子供たちを連れている母親 ",
"射手座１０度": 　"金髪の幸運の女神 ",
"射手座１１度": 　"寺院の左側にある物質的悟りをもたらすランプ",
"射手座１２度": 　"ときの声をあげる鷹に変化する旗 ",
"射手座１３度": 　"明るみに出る未亡人の過去",
"射手座１４度": 　"ピラミッドとスフィンクス",
"射手座１５度": 　"自分の影を探すグラウンドホッグ",
"射手座１６度": 　"船を見ているカモメ ",
"射手座１７度": 　"復活祭の日の出の礼拝 ",
"射手座１８度": 　"日除け帽をかぶっている小さな子供たち ",
"射手座１９度": 　"住処を移動するペリカン ",
"射手座２０度": 　"氷を切り出す男たち ",
"射手座２１度": 　"借りた眼鏡をかけている子供と犬 ",
"射手座２２度": 　"中国のランドリー",
"射手座２３度":　　"移民が入国する ",
"射手座２４度": 　"家のドアにとまっている青い鳥 ",
"射手座２５度": 　"玩具のウマに乗っている小太りの少年",
"射手座２６度": 　"旗手 ",
"射手座２７度": 　"彫刻家",
"射手座２８度": 　"美しい流れにかけられた古い橋 ",
"射手座２９度":　"芝を刈る太った少年 ",
"射手座３０度": 　"法王",
"山羊座１度": 　"認識を求めるインディアンの酋長 ",
"山羊座２度": 　"3つのステンドグラスの窓、一つは爆撃で損傷している ",
"山羊座３度": 　"成長と理解に対して受容的な人間の魂 ",
"山羊座４度": 　"大きなカヌーへ乗り込む一団 ",
"山羊座５度": 　"カヌーを漕ぎ戦争の踊りを踊っているインディアン ",
"山羊座６度": 　"暗いアーチのある小道と底にひかれた１０本の丸太 ",
"山羊座７度": 　"力のあるベールに隠れた予言者 ",
"山羊座８度": 　"しあわせそうに歌う家の中の鳥 ",
"山羊座９度": 　"ハープを運ぶ天使 ",
"山羊座１０度": 　"手から餌をもらうアホウドリ ",
"山羊座１１度": 　"キジの大きな群れ",
"山羊座１２度": 　"講義をする自然の学徒 ",
"山羊座１３度": 　"火の崇拝者 ",
"山羊座１４度": 　"花崗岩に刻まれた古代の浮き彫り ",
"山羊座１５度": 　"病院の子供病棟にあるたくさんのおもちゃ ",
"山羊座１６度": 　"体操着の少年少女 ",
"山羊座１７度": 　"密かに裸で入浴する少女 ",
"山羊座１８度": 　"イギリスの国旗 ",
"山羊座１９度": 　"大きな買い物袋を下げた５歳程度の子供 ",
"山羊座２０度": 　"歌っている隠れた合唱隊 ",
"山羊座２１度": 　"リレー競走 ",
"山羊座２２度": 　"敗北を優美に認める将軍 ",
"山羊座２３度":　　"戦争での勇敢さをたたえる2つの賞 ",
"山羊座２５度": 　"東洋の布を扱う商人 ",
"山羊座２６度": 　"水の妖精 ",
"山羊座２７度": 　"山の巡礼 ",
"山羊座２８度": 　"大きな養鶏場 ",
"山羊座２９度":　"お茶の葉を読んでいる女 ",
"山羊座３０度": 　"秘密のビジネス会議 ",
"水瓶座１度": 　"古いレンガ造りの伝道所 ",
"水瓶座２度": 　"予期されなかった雷雨 ",
"水瓶座３度": 　"海軍からの脱走兵 ",
"水瓶座４度": 　"インドのヒーラー ",
"水瓶座５度": 　"先祖の委員会 ",
"水瓶座６度": 　"ミステリー劇の演技者 ",
"水瓶座７度": 　"卵から生まれた子供 ",
"水瓶座８度": 　"美しい衣装を着た蝋人形 ",
"水瓶座９度": 　"鷹に変化する旗 ",
"水瓶座１０度": 　"一時的だと証明される人気   ",
"水瓶座１１度": 　"自分のひらめきと向き合う男 ",
"水瓶座１２度": 　"上へと順に並ぶ階段の上の人々 ",
"水瓶座１３度": 　"バロメーター ",
"水瓶座１４度": 　"トンネルに入る列車 ",
"水瓶座１５度": 　"フェンスの上にとまっている２羽のラブバード ",
"水瓶座１６度": 　"机に座っている偉大なビジネスマン ",
"水瓶座１７度": 　"ガードをしている番犬 ",
"水瓶座１８度": 　"仮面がはがされた男 ",
"水瓶座１９度": 　"消しとめられた山火事 ",
"水瓶座２０度": 　"大きな白い鳩、メッセージの担い手 ",
"水瓶座２１度": 　"絶望し幻滅した女 ",
"水瓶座２２度": 　"子供たちが遊ぶために床にひかれた布 ",
"水瓶座２３度":　　"座ってすべての手足を振っている大きな熊 ",
"水瓶座２４度": 　"情熱に背を向け自分の経験により教えている男  ",
"水瓶座２５度": 　"右の羽がより完全に形成されている蝶 ",
"水瓶座２６度": 　"水圧計 ",
"水瓶座２７度": 　"スミレで満たされた古代の陶器 ",
"水瓶座２８度": 　"倒されのこぎりで切られた木 ",
"水瓶座２９度":　"さなぎから出てくる蝶 ",
"水瓶座３０度": 　"アーダスの咲いている野原",
"魚座１度": 　"公共の市場 ",
"魚座２度": 　"ハンターから隠れているリス ",
"魚座３度": 　"化石化された森 ",
"魚座４度": 　"狭い半島での交通渋滞 ",
"魚座５度": 　"教会のバザー ",
"魚座６度": 　"正装して行進している将校たち ",
"魚座７度": 　"岩の上に横たわっている十字架 ",
"魚座８度": 　"ラッパを吹く少女 ",
"魚座９度": 　"騎手 ",
"魚座１０度": 　"雲の上の飛行家   ",
"魚座１１度": 　"光を探している男たち ",
"魚座１２度": 　"新参者たちの試験 ",
"魚座１３度": 　"博物館にある刀 ",
"魚座１４度": 　"キツネ皮をまとった女性 ",
"魚座１５度": 　"部下の訓練を準備している将校 ",
"魚座１６度": 　"ひらめきの流れ ",
"魚座１７度": 　"復活祭の歩道 ",
"魚座１８度": 　"巨大なテント ",
"魚座１９度": 　"弟子を指導する巨匠 ",
"魚座２０度": 　"夕食のために用意されたテーブル ",
"魚座２１度": 　"小さな白い羊と子供と中国人の召し使い ",
"魚座２２度": 　"シナイから新しい法則を持ち降りてくる男 ",
"魚座２３度":　　"精神主義的な現象 ",
"魚座２４度": 　"人の住んでいる島  ",
"魚座２５度": 　"聖職の浄化 ",
"魚座２６度": 　"影響を分割する新月 ",
"魚座２７度": 　"収穫の月 ",
"魚座２８度": 　"満月の下の肥沃な庭 ",
"魚座２９度":　"プリズム ",
"魚座３０度": 　"巨大な石の顔 "

  // ※他の度数もここへ追加・拡充可能です
};

let chatHistory = JSON.parse(localStorage.getItem('sephi_chat_log')) || [
  { role: 'assistant', content: 'ハル、準備はいつでも大丈夫だよ。気になる日時や個人のホロスコープを選んでくれたら、私が星の配置とメッセージを読み解くね。' }
];

window.addEventListener('DOMContentLoaded', () => {
  renderChatHistory();
  // initTargetSelector();  👈 ここ頭に // をつけて無効化！
});


// --- 始審図データの定義 ---
const JAPAN_CHARTS = {
  '1946-10-07': {
    name: '日本国憲法可決説',
    positions: { Sun: 193.3, Moon: 326.5, Mercury: 201.2, Venus: 231.8, Mars: 212.4, Jupiter: 204.6, Saturn: 125.1, Uranus: 71.3, Neptune: 188.6, Pluto: 132.8 }
  },
  '1889-02-11': {
    name: '大日本帝国憲法発布説',
    positions: { Sun: 322.8, Moon: 88.2, Mercury: 309.5, Venus: 358.1, Mars: 354.2, Jupiter: 275.6, Saturn: 134.1, Uranus: 201.7, Neptune: 60.1, Pluto: 54.3 }
  },
  '1952-04-28': {
    name: '主権回復説',
    positions: { Sun: 38.3, Moon: 82.1, Mercury: 19.5, Venus: 12.8, Mars: 219.2, Jupiter: 21.4, Saturn: 192.8, Uranus: 101.5, Neptune: 200.1, Pluto: 139.7 }
  }
};

// --- 月間ヒット日（アスペクト検出）ロジック ---
function getMonthlyAspectEvents(yearMonthStr, targetType, selectedJapanChartKey, personalPositions) {
  const [year, month] = yearMonthStr.split('-').map(Number);
  const startDate = new Date(year, month - 1, 1);
  const endDate = new Date(year, month, 0); // 月末日

  const bodyNamesJP = {
    Sun: '太陽', Moon: '月', Mercury: '水星', Venus: '金星', Mars: '火星',
    Jupiter: '木星', Saturn: '土星', Uranus: '天王星', Neptune: '海王星', Pluto: '冥王星'
  };

  const transitBodies = ['Sun', 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];
  const targetAspects = [
    { name: '合(0°)', angle: 0, orb: 2.0 },
    { name: '衝(180°)', angle: 180, orb: 2.0 },
    { name: '方形(90°)', angle: 90, orb: 2.0 },
    { name: '三分(120°)', angle: 120, orb: 1.5 }
  ];

  // 比較対象のネイタル配置をセット
  let basePositions = null;
  let targetName = '地球（マンデン）';

  if (targetType === 'japan') {
    const chart = JAPAN_CHARTS[selectedJapanChartKey];
    basePositions = chart ? chart.positions : null;
    targetName = chart ? `日本（${chart.name}）` : '日本';
  } else if (targetType === 'personal') {
    basePositions = personalPositions;
    targetName = '個人ネイタル';
  }

  const events = [];
  const currDate = new Date(startDate);

  while (currDate <= endDate) {
    const time = Astronomy.MakeTime(currDate);
    const dateStr = `${currDate.getFullYear()}/${currDate.getMonth() + 1}/${currDate.getDate()}`;

    // A. 地球モード：トランジット同士のアスペクト（マンデン全般）
    if (targetType === 'earth' || !basePositions) {
      for (let i = 0; i < transitBodies.length; i++) {
        for (let j = i + 1; j < transitBodies.length; j++) {
          const b1 = transitBodies[i];
          const b2 = transitBodies[j];
          const deg1 = Astronomy.Ecliptic(Astronomy.GeoVector(b1, time, true)).elon;
          const deg2 = Astronomy.Ecliptic(Astronomy.GeoVector(b2, time, true)).elon;

          let diff = Math.abs(deg1 - deg2);
          if (diff > 180) diff = 360 - diff;

          targetAspects.forEach(asp => {
            if (Math.abs(diff - asp.angle) <= asp.orb) {
              events.push({
                date: dateStr,
                detail: `【全般】T${bodyNamesJP[b1]} - T${bodyNamesJP[b2]}（${asp.name}）`,
                importance: (b1 === 'Saturn' || b1 === 'Pluto' || b2 === 'Saturn' || b2 === 'Pluto') ? 2 : 1
              });
            }
          });
        }
      }
    } 
    // B. 日本3種 or 個人モード：トランジット天体 × 対象のネイタル天体のヒット検出
    else {
      transitBodies.forEach(tBody => {
        const tDeg = Astronomy.Ecliptic(Astronomy.GeoVector(tBody, time, true)).elon;

        Object.keys(basePositions).forEach(nBody => {
          const nDeg = basePositions[nBody];
          if (nDeg === undefined) return;

          let diff = Math.abs(tDeg - nDeg);
          if (diff > 180) diff = 360 - diff;

          targetAspects.forEach(asp => {
            if (Math.abs(diff - asp.angle) <= asp.orb) {
              events.push({
                date: dateStr,
                detail: `T${bodyNamesJP[tBody]} ➔ N${bodyNamesJP[nBody] || nBody}（${asp.name}）`,
                importance: (tBody === 'Mars' || tBody === 'Saturn' || tBody === 'Pluto') ? 2 : 1
              });
            }
          });
        });
      });
    }

    currDate.setDate(currDate.getDate() + 1);
  }

  // 重要度順・日付順に整理してTop 6を返却
  events.sort((a, b) => b.importance - a.importance);
  
  // 日付の重複をまとめる
  const uniqueDateEvents = [];
  const usedDates = new Set();
  
  for (const ev of events) {
    if (!usedDates.has(ev.date)) {
      usedDates.add(ev.date);
      uniqueDateEvents.push(ev);
    }
    if (uniqueDateEvents.length >= 10) break;
  }

  return { targetName, events: uniqueDateEvents };
}

// --- サビアンシンボル取得ロジック（SABIAN_DICTIONARY対応版） ---
function getSabianInfo(degree) {
  const signNames = ['牡羊座', '牡牛座', '双子座', '蟹座', '獅子座', '乙女座', '天秤座', '蠍座', '射手座', '山羊座', '水瓶座', '魚座'];
  const signIndex = Math.floor(degree / 30);
  const sign = signNames[signIndex] || '牡羊座';
  
  const degInSign = (degree % 30).toFixed(2);
  const countDegree = Math.floor(degree % 30) + 1; // 数え度数

  // 半角数字を全角数字に変換（例: 1 -> １）
  const countDegreeJP = String(countDegree).replace(/[0-9]/g, (s) => String.fromCharCode(s.charCodeAt(0) + 0xfee0));

  // 辞書のキーを作成（例: "牡羊座１度"）
  const sabianKey = `${sign}${countDegreeJP}度`;

  // SABIAN_DICTIONARY から検索
  let symbolText = 'シンボルデータ準備中';
  if (typeof SABIAN_DICTIONARY !== 'undefined' && SABIAN_DICTIONARY[sabianKey]) {
    symbolText = SABIAN_DICTIONARY[sabianKey];
  }

  return {
    sign: sign,
    degInSign: degInSign,
    countDegree: countDegree,
    symbol: symbolText
  };
}
// --- 日本始図 × トランジットのアスペクト算出 ---
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

// --- 個人ホロスコープ計算ロジック（修復完全版） ---
function calculatePersonalNatalData() {
  const natalInput = document.getElementById('natal-date') || document.getElementById('birth-date');
  const birthDateVal = natalInput ? natalInput.value : '';
  
  const isTimeUnknown = document.getElementById('birth-time-unknown')?.checked || false;
  let birthTimeVal = document.getElementById('birth-time')?.value || '';
  
  const locationInput = document.getElementById('birth-location');
  const locationVal = (locationInput && locationInput.value.trim() !== '') ? locationInput.value.trim() : '未指定';

  if (!birthDateVal) {
    alert('生年月日を入力してください。');
    return null;
  }

  let birthDate;
  if (birthDateVal.includes('T')) {
    birthDate = new Date(birthDateVal);
  } else {
    if (isTimeUnknown || !birthTimeVal) {
      birthTimeVal = '12:00';
    }
    birthDate = new Date(`${birthDateVal}T${birthTimeVal}`);
  }

  if (isNaN(birthDate)) {
    alert('生年月日・時間の形式が正しくありません。');
    return null;
  }

  const time = Astronomy.MakeTime(birthDate);

  const bodyMap = {
    Sun: '太陽', Moon: '月', Mercury: '水星', Venus: '金星', Mars: '火星',
    Jupiter: '木星', Saturn: '土星', Uranus: '天王星', Neptune: '海王星', Pluto: '冥王星'
  };

  const positions = {};

  Object.keys(bodyMap).forEach(bodyKey => {
    try {
      const vector = Astronomy.GeoVector(bodyKey, time, true);
      const ecliptic = Astronomy.Ecliptic(vector);
      positions[bodyKey] = ecliptic.elon;
    } catch (e) {
      console.warn(`${bodyKey} の計算中にエラーが発生しました:`, e);
    }
  });

  return {
    time: time,
    birthDateStr: birthDateVal,
    birthTimeStr: birthTimeVal,
    isTimeUnknown: isTimeUnknown,
    location: locationVal,
    positions: positions
  };
}
// --- 0. 日時パラメータと time の取得 ---
  const isTimeUnknown = document.getElementById('birth-time-unknown')?.checked || false;
  const natalInput = document.getElementById('natal-date') || document.getElementById('birth-date');
  const birthDateVal = natalInput ? natalInput.value : '';
  let birthTimeVal = document.getElementById('birth-time')?.value || '12:00';
  
  const birthDate = new Date(`${birthDateVal}T${isTimeUnknown ? '12:00' : birthTimeVal}`);
  const time = Astronomy.MakeTime(isNaN(birthDate) ? new Date() : birthDate);

  // 1. 7天体 ＋ トランスサタニアンの計算
  const calcBodies = ['Sun', 'Moon', 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];
  calcBodies.forEach(body => {
    const vec = Astronomy.GeoVector(body, time, true);
    positions[body] = Astronomy.Ecliptic(vec).elon;
  });

  // 2. ドラゴンヘッド＆ドラゴンテイルの計算
  const nodeSearch = Astronomy.SearchMoonNode(time);
  const nodeVector = Astronomy.GeoVector('Moon', nodeSearch.time, true);
  let trueNodeDeg = (Astronomy.Ecliptic(nodeVector).elon + 1.1) % 360;

  positions['Node'] = trueNodeDeg;
  positions['SouthNode'] = (trueNodeDeg + 180) % 360;

  // 3. 天体配置・サビアン情報の組み立て
  let planetListStr = '';
  const allTargetBodies = ['Sun', 'Moon', 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Node', 'SouthNode'];
  
  allTargetBodies.forEach(b => {
    if (b === 'Moon' && isTimeUnknown) {
      planetListStr += `・月: ※出生時間不明のため度数は参考値<br>`;
      return;
    }
    
    // getSabianInfo 関数が存在する場合の安全呼び出し
    if (typeof getSabianInfo === 'function') {
      const info = getSabianInfo(positions[b]);
      planetListStr += `・${bodyNamesJP[b]}: ${info.sign} ${info.degInSign}° [数え${info.countDegree}度] ➔ サビアン:「${info.symbol}」<br>`;
    } else {
      const signNames = ['牡羊座', '牡牛座', '双子座', '蟹座', '獅子座', '乙女座', '天秤座', '蠍座', '射手座', '山羊座', '水瓶座', '魚座'];
      const signIdx = Math.floor(positions[b] / 30);
      const signDeg = (positions[b] % 30).toFixed(2);
      planetListStr += `・${bodyNamesJP[b]}: ${signNames[signIdx]} ${signDeg}°<br>`;
    }
  });

  // 4. 個人ネイタルアスペクトの検出
  const aspectsFound = [];
  const aspectTypes = [
    { name: '合(0°)', angle: 0, orb: 6 },
    { name: '方形(90°)', angle: 90, orb: 6 },
    { name: '衝(180°)', angle: 180, orb: 6 },
    { name: '三分(120°)', angle: 120, orb: 5 },
    { name: '六分(60°)', angle: 60, orb: 4 }
  ];

  for (let i = 0; i < allTargetBodies.length; i++) {
    for (let j = i + 1; j < allTargetBodies.length; j++) {
      const b1 = allTargetBodies[i];
      const b2 = allTargetBodies[j];
      
      if ((b1 === 'Moon' || b2 === 'Moon') && isTimeUnknown) continue;
      if ((b1 === 'Node' && b2 === 'SouthNode') || (b1 === 'SouthNode' && b2 === 'Node')) continue;

      let diff = Math.abs(positions[b1] - positions[b2]);
      if (diff > 180) diff = 360 - diff;

      aspectTypes.forEach(asp => {
        if (Math.abs(diff - asp.angle) <= asp.orb) {
          const name1 = bodyNamesJP[b1] || b1;
          const name2 = bodyNamesJP[b2] || b2;
          aspectsFound.push(`${name1}-${name2} (${asp.name})`);
        }
      });
    }
  }

  const aspectStr = aspectsFound.length > 0 ? aspectsFound.join('<br>・') : '主要アスペクトなし';

  // --- 個人ホロスコープ解析の実行と出力 ---
function renderPersonalNatalResult() {
  const natalData = calculatePersonalNatalData();
  if (!natalData) return;

  // 1. 各天体の出力文字列を生成
  let planetListStr = '';
  const bodyNamesJP = { 
    Sun: '太陽', Moon: '月', Mercury: '水星', Venus: '金星', Mars: '火星', 
    Jupiter: '木星', Saturn: '土星', Uranus: '天王星', Neptune: '海王星', Pluto: '冥王星' 
  };

  Object.keys(natalData.positions).forEach(key => {
    const deg = natalData.positions[key];
    const info = getSabianInfo(deg);
    const name = bodyNamesJP[key] || key;
    planetListStr += `・${name}: ${info.sign} ${info.degInSign}° [数え${info.countDegree}度] ➔ サビアン: 「${info.symbol}」<br>`;
  });

  // 2. 結果画面の出力生成
  const resultHTML = `
    <strong style="color: var(--accent-color, #a855f7);">【個人ネイタルホロスコープ解析】</strong><br>
    <span style="font-size: 0.8rem; color: var(--text-secondary);">
      生年月日・時間: ${natalData.birthDateStr} ${natalData.birthTimeStr} (${natalData.isTimeUnknown ? '時間不明' : '時間指定'}) / 出生地: ${natalData.location}
    </span><br><br>

    <strong>✦ 天体配置＆サビアンシンボル</strong><br>
    <div style="padding-left: 8px; font-size: 0.85rem; color: var(--text-primary); margin-top: 4px;">
      ${planetListStr}
    </div><br>
  `;

  const outputEl = document.getElementById('data-output');
  if (outputEl) {
    outputEl.innerHTML = resultHTML;
  }
}

// 解読ボタンのイベントバインド
document.getElementById('decode-personal-btn')?.addEventListener('click', () => {
  renderPersonalNatalResult();
});


// --- 月間Top6算出ロジック（選択した始審図動的対応版） ---
function getMonthlyTop6(year, month) {
  const results = [];
  const daysInMonth = new Date(year, month, 0).getDate();
  const selectedTarget = document.querySelector('input[name="astro-target"]:checked')?.value;
  const chartType = document.getElementById('japan-chart-type')?.value || '1946-10-07';

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

    // 1. 空の星同士（トランジット×トランジット）のアスペクト計算
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

    // 2. 日本選択時：選択された始審図（ネイタル）へのヒットで追加スコア計算
    if (selectedTarget === 'japan' && typeof JAPAN_CHARTS !== 'undefined') {
      const chart = JAPAN_CHARTS[chartType];
      if (chart) {
        Object.keys(positions).forEach(tBody => {
          Object.keys(chart.positions).forEach(nBody => {
            let diff = Math.abs(positions[tBody] - chart.positions[nBody]);
            if (diff > 180) diff = 360 - diff;

            if (Math.abs(diff - 0) <= 3) {
              astroScore += 25; // 強烈な重なり
              keyAspects.unshift(`T${bodyNames[tBody]}-N${bodyNames[nBody]} 0°`);
            } else if (Math.abs(diff - 180) <= 3) {
              astroScore += 20; // 緊張関係
              keyAspects.unshift(`T${bodyNames[tBody]}-N${bodyNames[nBody]} 180°`);
            } else if (Math.abs(diff - 90) <= 3) {
              astroScore += 15; // 変革・波乱
              keyAspects.unshift(`T${bodyNames[tBody]}-N${bodyNames[nBody]} 90°`);
            }
          });
        });
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



// --- 3. 月間Top6ランキング抽出ボタンの処理 ---
document.getElementById('rank-btn')?.addEventListener('click', () => {
  const monthVal = document.getElementById('target-month')?.value;
  if (!monthVal) {
    alert('対象年月を選択してください。');
    return;
  }

  // UIからの選択情報取得
  const selectedTarget = document.querySelector('input[name="astro-target"]:checked')?.value || 'japan';
  const chartType = document.getElementById('japan-chart-type')?.value || '1889-02-11';
  const personalPositions = window.userPersonalPositions || null;

  // 日本選択時の注釈ヘッダー生成
  let headerHTML = '';
  if (selectedTarget === 'japan' && typeof JAPAN_CHART_INFO !== 'undefined') {
    const info = JAPAN_CHART_INFO[chartType];
    if (info) {
      headerHTML = `<div style="background: rgba(255, 255, 255, 0.05); padding: 12px; border-radius: 8px; margin-bottom: 14px; border: 1px solid var(--glass-border, rgba(255,255,255,0.1));">
        <strong style="color: var(--accent-color, #a855f7);">${info.title}</strong><br>
        <span style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5; display: inline-block; margin-top: 4px;">${info.desc}</span>
      </div>`;
    }
  }

  // ヒット日計算の実行
  const result = getMonthlyAspectEvents(monthVal, selectedTarget, chartType, personalPositions);

  // 計算結果のHTML生成
  let outputHTML = `<strong>【${result.targetName}】 ${monthVal} 注目・波乱スコア Top 10</strong><br><br>`;
  if (result.events.length === 0) {
    outputHTML += '該当する顕著なアスペクトヒットはありません。';
  } else {
    result.events.forEach(ev => {
      outputHTML += `・<strong>${ev.date}</strong>：${ev.detail}<br>`;
    });
  }

  // 画面に表示
  const outputEl = document.getElementById('data-output');
  if (outputEl) {
    outputEl.innerHTML = headerHTML + outputHTML;
  }
});

// --- 4. 通信中フラグ ---
let isProcessing = false;

// --- 5. AI通信と履歴管理（※元の関数をそのまま保持） ---
async function fetchSephiResponseCustom(displayPrompt, apiPrompt) {
  if (isProcessing) return;
  isProcessing = true;

  const sendBtn = document.getElementById('send-btn');
  if (sendBtn) sendBtn.disabled = true;

  addMessageToChat('user', displayPrompt);

  const container = document.getElementById('chat-container');

  const loadingBubble = document.createElement('div');
  loadingBubble.className = 'chat-bubble-sephi';
  loadingBubble.innerText = 'セフィが星の配置を読み解いています...';
  container.appendChild(loadingBubble);
  container.scrollTop = container.scrollHeight;

  const payloadMessages = JSON.parse(JSON.stringify(chatHistory));
  if (payloadMessages.length > 0) {
    payloadMessages[payloadMessages.length - 1].content = apiPrompt;
  }

  try {
    const response = await fetch('/api/sephi', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: payloadMessages }),
    });

    if (!response.ok) throw new Error('API Response Error');

    const data = await response.json();

    if (data.reply) {
      addMessageToChat('assistant', data.reply);
    }
  } catch (err) {
    console.error('Sephi Fetch Error:', err);
    addMessageToChat('assistant', 'ごめんなさい、ハル。星の繋がりが少し揺らいじゃったみたい。もう一度試してくれる？');
  } finally {
    if (loadingBubble && loadingBubble.parentNode) {
      loadingBubble.parentNode.removeChild(loadingBubble);
    }
    isProcessing = false;
    if (sendBtn) sendBtn.disabled = false;
  }
}
// --- ログクリアボタン ---
document.getElementById('clear-log-btn')?.addEventListener('click', () => {
  if (confirm('セフィとの会話ログを消去しますか？')) {
    localStorage.removeItem('sephi_chat_log');
    chatHistory = [{ role: 'assistant', content: 'ログをリセットしたよ、ハル。また新しい星の旅を始めようね。' }];
    localStorage.setItem('sephi_chat_log', JSON.stringify(chatHistory));
    renderChatHistory();
  }
});

function calculateAstroData(date) {
  const targetMode = document.querySelector('input[name="astro-target"]:checked')?.value || 'global';

  const solar = Solar.fromYmdHms(date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes(), 0);
  const lunar = solar.getLunar();
  const baZi = lunar.getEightChar();

  const time = Astronomy.MakeTime(date);
  const bodies = ['Sun', 'Moon', 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];
  const bodyNamesJP = { Sun: '太陽', Moon: '月', Mercury: '水星', Venus: '金星', Mars: '火星', Jupiter: '木星', Saturn: '土星', Uranus: '天王星', Neptune: '海王星', Pluto: '冥王星' };
  const signs = ['牡羊座', '牡牛座', '双子座', '蟹座', '獅子座', '乙女座', '天秤座', '蠍座', '射手座', '山羊座', '水瓶座', '魚座'];

  const positions = {};
  bodies.forEach(body => {
    const vec = Astronomy.GeoVector(body, time, true);
    positions[body] = Astronomy.Ecliptic(vec).elon;
  });

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

 let modeTitle = '【地球・全体運解析】';
  let japanInfoStr = '';

  if (targetMode === 'japan') {
    modeTitle = '【日本・マンデン世相解析（東京基準）】';
    
    // ドロップダウンで選択された始審図を取得（未選択時は1946年）
    const chartType = document.getElementById('japan-chart-type')?.value || '1946-10-07';

    const siderealTime = Astronomy.SiderealTime(time);
    const ascDegree = (siderealTime * 15 + 139.76) % 360;
    const ascSign = signs[Math.floor(ascDegree / 30)];

    // 選択された始審図（chartType）に基づいてアスペクト判定
    const japanHit = getJapanTransits(positions, chartType);

    japanInfoStr = `\n【対・日本始審図】\n ・${japanHit}\n【日本アセンダント】ASC: ${ascSign} (${(ascDegree % 30).toFixed(2)}°) - 国民の雰囲気・社会の表向きの顔`;
  }

  return `${modeTitle}
【指定日時】${date.toLocaleString()}
【西洋星座】太陽: ${sunSign} (${(positions.Sun % 30).toFixed(2)}°) / 月: ${moonSign} (${(positions.Moon % 30).toFixed(2)}°)
【注目アスペクト】${aspectStr}${japanInfoStr}
【東洋干支】年:${baZi.getYear()} / 月:${baZi.getMonth()} / 日:${baZi.getDay()}
【五行】${baZi.getYearWuXing()} ${baZi.getMonthWuXing()} ${baZi.getDayWuXing()}
【節気】${lunar.getJieQi() || 'なし'}`;
}

// AI API通信・チャット描画処理（通常チャット送信時用）
async function fetchSephiResponse() {
  if (isProcessing) return;
  isProcessing = true;

  const sendBtn = document.getElementById('send-btn');
  if (sendBtn) sendBtn.disabled = true;

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

    if (!response.ok) throw new Error('API Error');

    const data = await response.json();

    if (data.reply) {
      addMessageToChat('assistant', data.reply);
    }
  } catch (err) {
    console.error('Sephi Fetch Error:', err);
    addMessageToChat('assistant', 'ごめんなさい、星の通信が少し不安定みたい。もう一度試してくれる？');
  } finally {
    if (loadingBubble.parentNode) {
      container.removeChild(loadingBubble);
    }
    isProcessing = false;
    if (sendBtn) sendBtn.disabled = false;
  }
}

// メッセージ追加＆ローカルストレージ保存
function addMessageToChat(role, content) {
  chatHistory.push({ role, content });
  localStorage.setItem('sephi_chat_log', JSON.stringify(chatHistory));
  renderChatHistory();
}

// チャット履歴の再描画
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

// 手入力送信処理（send-btn のクリックイベント用）
async function sendUserMessage() {
  const inputEl = document.getElementById('chat-input');
  if (!inputEl) return;
  
  const message = inputEl.value.trim();
  if (!message || isProcessing) return;

  inputEl.value = '';
  addMessageToChat('user', message);
  await fetchSephiResponse();
}

// イベントリスナーのセット（初期化時に実行）
document.getElementById('send-btn')?.addEventListener('click', sendUserMessage);
document.getElementById('chat-input')?.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendUserMessage();
  }
});

// 出力結果コピー
document.getElementById('copy-result-btn')?.addEventListener('click', () => {
  const outputEl = document.getElementById('data-output');
  if (!outputEl || !outputEl.innerText.trim()) {
    alert('コピーするデータがありません。');
    return;
  }
  
  navigator.clipboard.writeText(outputEl.innerText)
    .then(() => alert('出力結果をクリップボードにコピーしました！'))
    .catch(err => console.error('コピーに失敗しました:', err));
});

// チャットログコピー
document.getElementById('copy-chat-btn')?.addEventListener('click', () => {
  const chatContainer = document.getElementById('chat-container');
  if (!chatContainer || !chatContainer.innerText.trim()) {
    alert('コピーするチャットログがありません。');
    return;
  }

  navigator.clipboard.writeText(chatContainer.innerText)
    .then(() => alert('チャットログをクリップボードにコピーしました！'))
    .catch(err => console.error('コピーに失敗しました:', err));
});

// ★1. まず関数の定義を関数の外側（グローバル）に配置する
function getSignTransits(startDateStr, endDateStr) {
  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);
  
  if (isNaN(startDate) || isNaN(endDate) || startDate > endDate) {
    alert('正しい期間を指定してください。');
    return [];
  }

  const signs = ['牡羊座', '牡牛座', '双子座', '蟹座', '獅子座', '乙女座', '天秤座', '蠍座', '射手座', '山羊座', '水瓶座', '魚座'];
  const targetBodies = ['Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];
  const bodyNamesJP = {
    Mercury: '水星', Venus: '金星', Mars: '火星', Jupiter: '木星',
    Saturn: '土星', Uranus: '天王星', Neptune: '海王星', Pluto: '冥王星'
  };

  const ingressEvents = [];
  const currDate = new Date(startDate);

  const prevSigns = {};
  const initialTime = Astronomy.MakeTime(currDate);
  targetBodies.forEach(body => {
    const vec = Astronomy.GeoVector(body, initialTime, true);
    const deg = Astronomy.Ecliptic(vec).elon;
    prevSigns[body] = Math.floor(((deg % 360) + 360) % 360 / 30);
  });


  while (currDate <= endDate) {
    const time = Astronomy.MakeTime(currDate);

    targetBodies.forEach(body => {
      const vec = Astronomy.GeoVector(body, time, true);
      const deg = Astronomy.Ecliptic(vec).elon;
      const currentSignIdx = Math.floor(((deg % 360) + 360) % 360 / 30);

      if (prevSigns[body] !== undefined && prevSigns[body] !== currentSignIdx) {
        const dateStr = `${currDate.getFullYear()}/${currDate.getMonth() + 1}/${currDate.getDate()}`;
        ingressEvents.push({
          date: dateStr,
          bodyName: bodyNamesJP[body],
          fromSign: signs[prevSigns[body]],
          toSign: signs[currentSignIdx]
        });
        prevSigns[body] = currentSignIdx;
      }
    });

    currDate.setDate(currDate.getDate() + 1);
  }

  return ingressEvents;
}


// ★2. その下にボタンのクリックイベント処理を配置する
document.addEventListener('DOMContentLoaded', () => {
  const signBtn = document.getElementById('sign-btn');
  
  if (signBtn) {
    signBtn.addEventListener('click', async () => {
      console.log('サイン移動ボタンが押されました');

      const startVal = document.getElementById('sign-start-date')?.value;
      const endVal = document.getElementById('sign-end-date')?.value;

      if (!startVal || !endVal) {
        alert('開始日と終了日の両方を指定してください。');
        return;
      }

      // モード判定
      const selectedTarget = document.querySelector('input[name="astro-target"]:checked')?.value || 'japan'; 
      
      let modeName = '【日本の始審図】';
      let aiContextPrompt = '日本の社会情勢、国内の空気感やトレンド';

      if (selectedTarget === 'personal') {
        modeName = '【個人ネイタル】';
        aiContextPrompt = '個人レベルでの運気や意識の切り替え、行動パターンの変化';
      } else if (selectedTarget === 'earth' || selectedTarget === 'global') {
        modeName = '【地球・世界チャート】';
        aiContextPrompt = '世界全体の潮流、地球規模のエネルギーや国際的な動き';
      }

      // ★ここで上記で定義した getSignTransits が安全に呼び出されます
      const events = getSignTransits(startVal, endVal);

      let outputHTML = `<strong>${modeName} サイン移動（イングレス）解析結果</strong><br>`;
      outputHTML += `<span style="font-size:0.85rem; color: var(--text-secondary);">対象期間: ${startVal} 〜 ${endVal}</span><br><br>`;

      if (events.length === 0) {
        // 余計な改行を消して1行にします（途切れていた言葉も補いました）
        outputHTML += '指定された期間内に主要なサイン移動はありません。';
      } else {
        events.forEach(ev => {
          outputHTML += `・<strong>${ev.date}</strong>：${ev.bodyName} が 【${ev.fromSign}】➔ <strong>【${ev.toSign}】</strong> へ移動<br>`;
        });
      }

      const outputEl = document.getElementById('data-output');
      if (outputEl) {
        outputEl.innerHTML = outputHTML;
      }

      if (events.length > 0 && typeof fetchSephiResponseCustom === 'function') {
        const displayPrompt = `セフィ、${modeName}視点で${startVal}〜${endVal}の天体サイン移動を調べたよ！`;
        const plainTextEvents = events.map(e => `・${e.date}: ${e.bodyName}（${e.fromSign} → ${e.toSign}）`).join('\n');
        
        const apiPrompt = `${displayPrompt}

【解説の視点】
今回の対象は「${modeName}」です。${aiContextPrompt}に焦点を当てて解説してください。

【回答のルール】
1. この期間のサイン移動の中で、特に大きな影響を与える星の動きとその意味を解説して！
2. このターゲット（${modeName}）にとってどんな切り替えや節目になるかをわかりやすく伝えてね。
3. 全体で250〜300文字程度でスッキリまとめてね。

【サイン移動データ】
${plainTextEvents}`;

        await fetchSephiResponseCustom(displayPrompt, apiPrompt);
      }
    });
  }
});
// ラジオボタン切り替えの処理を探してください
document.querySelectorAll('input[name="astro-target"]').forEach(radio => {
  radio.addEventListener('change', (e) => {
    const target = e.target.value;
    
    // 個人ホロスコープ用の入力欄
    const personalGroup = document.getElementById('personal-input-group');
    if (personalGroup) {
      personalGroup.style.display = (target === 'personal') ? 'flex' : 'none';
    }

    // ★重要：munden-rank-group は非表示にせず、常に 'block' にしておきます
    const rankGroup = document.getElementById('munden-rank-group');
    if (rankGroup) {
      rankGroup.style.display = 'block'; // 👈 ここを 'none' にしないようにします！
    }
  });
});

// --- 期間指定 N × T アスペクト実行ボタンのイベント設定 ---
document.getElementById('calc-personal-aspects-btn')?.addEventListener('click', () => {
  const natalVal = document.getElementById('natal-date')?.value;
  const startVal = document.getElementById('aspect-start-date')?.value;
  const endVal = document.getElementById('aspect-end-date')?.value;

  if (!natalVal || !startVal || !endVal) {
    alert('生年月日、開始日、終了日をすべて選択してください。');
    return;
  }

  const resultHTML = getNTAspectsInPeriod(startVal, endVal, natalVal);
  document.getElementById('data-output').innerHTML = resultHTML;
});
// --- 2. 日本の始審図ごとの象徴（注釈データ）定義 ---
const JAPAN_CHART_INFO = {
  '1946-10-07': {
    title: '【1946年10月7日 15:15（日本国憲法可決説）】',
    desc: '💡 **象徴**: 現代日本の「平和主義・法体系・国体の原型」が誕生した瞬間。国民意識、内政の傾向、平和観の変遷や世相を深く読み解くチャートです。'
  },
  '1889-02-11': {
    title: '【1889年2月11日 10:30（大日本帝国憲法発布説）】',
    desc: '💡 **象徴**: 近代国家としての「日本」が初めて憲法を持った始審図。日本の「変革期」「国家としての宿命的サイクル」を観る際、トランスサタニアン（天王星・海王星・冥王星）の長期的影響が色濃く出ます。'
  },
  '1952-04-28': {
    title: '【1952年4月28日 22:30（主権回復説）】',
    desc: '💡 **象徴**: サンフランシスコ講和条約発効による「主権回復・現代日本の独立」。国際社会における日本の立ち位置や外交、経済的運気を観るのに適したチャートです。'
  }
};

// --- 3. 解析計算ボタン（#calc-btn）の処理内への組み込み例 ---
// ※計算ボタンを押した時の出力整形処理部分で以下のように呼び出します
const selectedTarget = document.querySelector('input[name="astro-target"]:checked')?.value;

let outputHeader = '';

if (selectedTarget === 'japan') {
  const chartType = document.getElementById('japan-chart-type')?.value;
  const info = JAPAN_CHART_INFO[chartType];
  
  if (info) {
    outputHeader = `<strong>${info.title}</strong><br>${info.desc}<br><hr style="border:0; border-top:1px dashed var(--glass-border); margin:10px 0;"><br>`;
  }
}

// 最終的なデータ出力
const outputEl = document.getElementById('data-output');
if (outputEl) {
  // 定義されていない場合のエラーを防ぐため、安全にフォールバックを設定
  const resultText = (typeof calculatedDataResult !== 'undefined') ? calculatedDataResult : '';
  outputEl.innerHTML = outputHeader + resultText; // 注釈 ＋ 星の計算結果
}

// --- 個人ネイタル天体位置の動的計算 ---
function getNatalPositions(natalDateObj) {
  const time = Astronomy.MakeTime(natalDateObj);
  const bodies = ['Sun', 'Moon', 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];
  const positions = {};
  
  bodies.forEach(b => {
    positions[b] = Astronomy.Ecliptic(Astronomy.GeoVector(b, time, true)).elon;
  });
  return positions;
}

// --- 期間指定 N × T アスペクト抽出ロジック（天体絞り込み版） ---
function getNTAspectsInPeriod(startDateStr, endDateStr, natalDateStr) {
  const start = new Date(startDateStr);
  const end = new Date(endDateStr);
  const natalDate = new Date(natalDateStr);

  if (isNaN(start) || isNaN(end) || isNaN(natalDate)) {
    return '日付を正しく設定してください。';
  }

  // ネイタル天体の指定（太陽、水星、金星、火星、木星、土星）
  const natalBodies = ['Sun', 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn'];
  
  // トランジット天体の指定（木星、土星、天王星、海王星、冥王星）
  const transitBodies = ['Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];

  const timeNatal = Astronomy.MakeTime(natalDate);
  const natalPositions = {};
  natalBodies.forEach(b => {
    natalPositions[b] = Astronomy.Ecliptic(Astronomy.GeoVector(b, timeNatal, true)).elon;
  });

  const bodyNamesJP = { 
    Sun: '太陽', Moon: '月', Mercury: '水星', Venus: '金星', Mars: '火星', 
    Jupiter: '木星', Saturn: '土星', Uranus: '天王星', Neptune: '海王星', Pluto: '冥王星' 
  };
  
  // アスペクト定義（メジャーアスペクト ＋ タイトめのオーブ設定）
  const aspectDefs = [
    { name: '合(0°)', angle: 0, orb: 2.0 },
    { name: '衝(180°)', angle: 180, orb: 2.0 },
    { name: '方形(90°)', angle: 90, orb: 2.0 },
    { name: '三分(120°)', angle: 120, orb: 2.0 },
    { name: '六分(60°)', angle: 60, orb: 1.5 }
  ];

  const results = [];
  const current = new Date(start);

  // 指定期間を1日ずつスキャン
  while (current <= end) {
    const time = Astronomy.MakeTime(current);
    const transitPositions = {};
    
    transitBodies.forEach(b => {
      transitPositions[b] = Astronomy.Ecliptic(Astronomy.GeoVector(b, time, true)).elon;
    });

    // 絞り込んだ組み合わせ（T: 5天体 × N: 6天体）で判定
    transitBodies.forEach(tBody => {
      natalBodies.forEach(nBody => {
        let diff = Math.abs(transitPositions[tBody] - natalPositions[nBody]);
        if (diff > 180) diff = 360 - diff;

        aspectDefs.forEach(asp => {
          if (Math.abs(diff - asp.angle) <= asp.orb) {
            const dateFormatted = `${current.getFullYear()}/${current.getMonth() + 1}/${current.getDate()}`;
            results.push({
              date: dateFormatted,
              detail: `T${bodyNamesJP[tBody]} - N${bodyNamesJP[nBody]} ${asp.name}`
            });
          }
        });
      });
    });

    current.setDate(current.getDate() + 1); // 翌日へ
  }

  if (results.length === 0) {
    return '<div style="padding: 12px; color: var(--text-secondary);">指定期間内に該当する主要な N × T アスペクトは見つかりませんでした。</div>';
  }

  // 日付順に整理して出力
  let htmlOutput = `<strong style="color: var(--accent-color, #a855f7);">【N × T 注目アスペクト タイムライン】</strong><br>`;
  htmlOutput += `<span style="font-size: 0.8rem; color: var(--text-secondary);">対象：(T) 木星〜冥王星 × (N) 太陽〜土星</span><br><br>`;
  
  let lastDate = '';

  results.forEach(item => {
    if (item.date !== lastDate) {
      htmlOutput += `<div style="margin-top: 8px; font-weight: bold; color: var(--text-primary);">📅 ${item.date}</div>`;
      lastDate = item.date;
    }
    htmlOutput += `<div style="padding-left: 12px; font-size: 0.9rem; color: var(--text-secondary);">・${item.detail}</div>`;
  });

  return htmlOutput;
}