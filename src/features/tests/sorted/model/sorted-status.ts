import { INormilizeDataTests } from "@entities/test/api/normilize-data-tests";
import { TSort } from "@entities/test/api/types";
import { sortedStatuses } from "../constants";

export const sortedTestsByStatus = (
  tests: INormilizeDataTests[],
  type: TSort
) => {
  //status должны быть отсортированы в:

  //ASC: Онлайн, Приостановлено, Остановленный, Черновик

  //DESC: Черновик, Остановлен, Приостановлено, Онлайн

  const sortedTests = tests.sort((a, b) => {
    return (
      sortedStatuses[type].indexOf(a.status) -
      sortedStatuses[type].indexOf(b.status)
    );
  });

  return sortedTests;
};
