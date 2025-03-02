import { ITestDTO } from "@entities/test/api/types";

import { IQueryParamsTestDTO, TSort } from "@entities/test/api/types";

export const sortedByAlphabet = <ObjectSort extends Object>(
  listSort: ObjectSort[],

  keysList: Array<keyof ObjectSort>,
  type?: TSort
) => {
  let resultSort = listSort;

  if (!type) return listSort;

  keysList.forEach((key) => {
    resultSort = resultSort.sort((a, b) => {
      if (typeof a?.[key] === "string" && typeof b?.[key] === "string") {
        return {
          asc: a?.[key]?.localeCompare(b?.[key]),
          desc: b?.[key]?.localeCompare(a?.[key]),
        }[type];
      }
      return 0;
    });
  });
};
