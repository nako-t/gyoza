export const recipe = [
  {
    title: "材料",
    explanation: "キャベツ、ニラを刻む",
    img: "",
  },
  {
    title: "切る",
    explanation: "キャベツ、ニラを刻む",
    img: "",
  },
  {
    title: "混ぜる",
    explanation: "ひき肉に調味料を入れる",
    img: "",
  },
  {
    title: "包む",
    explanation: "ひき肉に調味料を入れる",
    img: "",
  },
  {
    title: "焼く",
    explanation: "ひき肉に調味料を入れる",
    img: "",
  },
  {
    title: "完成",
    explanation: "ひき肉に調味料を入れる",
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
