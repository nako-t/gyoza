import type { ShopData } from "@/types/type";

/**
 * 指定されたセレクターに一致するチェックボックス要素の中から、チェックされているものの値（value）を配列として取得
 * @param selector - チェックボックスを特定するためのdata属性
 * @returns チェックされているチェックボックスのvalue属性値の配列
 */
export const getCheckedCheckboxValues = (element: string) => {
  const checkboxes = document.querySelectorAll<HTMLInputElement>(element);

  return Array.from(checkboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);
};
