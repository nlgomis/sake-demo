const sakeTypes = [
  {
    type: "junmai",
    name: "純米",
    description: "純粋な米で作られた日本酒で、豊かでコクのある味わいと、わずかな酸味が特徴。",
    flavorProfile: ["コクがある", "米の風味が強い", "わずかに酸味がある"],
    foodPairings: ["焼肉", "きのこ料理", "熟成チーズ"]
  },
  {
    type: "ginjo",
    name: "吟醸",
    description: "軽やかで果実のような香りと複雑な風味プロファイルを持つプレミアム日本酒。",
    flavorProfile: ["軽い", "フルーティー", "華やか"],
    foodPairings: ["刺身", "淡白な味付けの魚料理", "サラダ"]
  },
  {
    type: "daiginjo",
    name: "大吟醸",
    description: "繊細で洗練された味わいと香りを持つ最高級の日本酒。",
    flavorProfile: ["非常に軽い", "香り高い", "なめらか"],
    foodPairings: ["繊細な魚料理", "軽い前菜", "そのままで"]
  },
  {
    type: "nigori",
    name: "にごり酒",
    description: "濾過していない日本酒で、クリーミーな食感と甘い味わいが特徴。",
    flavorProfile: ["クリーミー", "甘い", "濃厚"],
    foodPairings: ["スパイシーな料理", "デザート", "新鮮な果物"]
  }
]

export default sakeTypes