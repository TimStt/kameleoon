import { ITestDTO } from "@entities/test/api/types";

import { TSort } from "@entities/test/api/types";

export const sortedByAlphabet = <ObjectSort extends Object>(
  keysList: Array<keyof ObjectSort>,
  listSort?: ObjectSort[],
  type?: TSort
) => {
  let resultSort = structuredClone(listSort);

  if (!type) return listSort;

  console.log("keysList SORT", keysList);

  keysList.forEach((key) => {
    resultSort = resultSort?.sort((a, b) => {
      if (typeof a?.[key] === "string" && typeof b?.[key] === "string") {
        return {
          asc: a?.[key]?.localeCompare(b?.[key]),
          desc: b?.[key]?.localeCompare(a?.[key]),
        }[type];
      }
      return 0;
    });
    console.log("sortedByAlphabet key", key, type, resultSort);
  });

  console.log("resultSort", resultSort);

  return resultSort;
};
