const questions = [
  {
    text: "好みの風味の強さは？",
    options: [
      { text: "軽くて繊細", value: "light" },
      { text: "濃厚で力強い", value: "bold" }
    ]
  },
  {
    text: "辛口と甘口どちらが好みですか？",
    options: [
      { text: "辛口", value: "dry" },
      { text: "甘口", value: "sweet" }
    ]
  },
  {
    text: "フルーティーな味わいについてどう思いますか？",
    options: [
      { text: "大好き", value: "fruity" },
      { text: "塩味の方が好き", value: "savory" }
    ]
  },
  {
    text: "新しくてユニークな味を試すのは好きですか？",
    options: [
      { text: "はい、冒険好きです", value: "adventurous" },
      { text: "いいえ、伝統的な味が好みです", value: "traditional" }
    ]
  },
  {
    text: "理想的な提供温度は？",
    options: [
      { text: "冷やして", value: "chilled" },
      { text: "常温", value: "room" }
    ]
  }
]

export default questions