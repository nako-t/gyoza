interface RecipeItem {
  title: string;
  explanation?: string;
  img?: string;
}

export const recipe: RecipeItem[] = [
  {
    title: "材料",
  },
  {
    title: "切る",
    explanation: "キャベツ、ニラをみじん切りにする。",
    img: "",
  },
  {
    title: "混ぜる",
    explanation:
      "ひき肉に調味料（醤油・ごま油・塩コショウ）を入れて混ぜる。その後、切ったキャベツ・ニラとすりおろしたニンニク・生姜を入れて混ぜる。",
    img: "",
  },
  {
    title: "包む",
    explanation:
      "ひだを作ってひたすら包む。皮が余ってしまった場合は、チーズを入れる。",
    img: "",
  },
  {
    title: "焼く",
    explanation:
      "フライパンに油をひいた後、餃子を並べ、蓋をして中火で焼く。皮の色が変わったら、水を入れて蒸し焼きにする。",
    img: "",
  },
  {
    title: "完成",
    explanation: "お皿に盛り付けて完成！",
    img: "",
  },
];

interface IngredientItem {
  name: string;
  quantity: string;
}

interface IngredientCategory {
  title: string;
  items: IngredientItem[];
}

export const ingredients: IngredientCategory[] = [
  {
    title: "具材",
    items: [
      { name: "ひき肉", quantity: "150g" },
      { name: "キャベツ", quantity: "180g" },
      { name: "ニラ", quantity: "1/2束" },
      { name: "にんにく", quantity: "1かけ" },
      { name: "生姜", quantity: "1かけ" },
    ],
  },
  {
    title: "調味料",
    items: [
      { name: "醤油", quantity: "大さじ1" },
      { name: "ごま油", quantity: "大さじ1" },
      { name: "塩コショウ", quantity: "少々" },
    ],
  },
];
