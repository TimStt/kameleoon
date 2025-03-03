import { WrapperTestsContext } from "@entities/test/ui/wrapper-tests/wrapper-tests";
import { sortedByAlphabet } from "@shared/helpers/sorted-by-alphabet/index";
import { useQueryParamAction } from "@shared/helpers/use-query-param-action";
import { useContext, useEffect, useState } from "react";
import { sortKeysByAlphabet, TSortKeysByAlphabet } from "../constants";
import { hasInParamKeysBySort } from "./has-in-param-keys-by-sort";
import { INormilizeDataTests } from "@entities/test/api/normilize-data-tests";
import { sortedTestsByStatus } from "./sorted-status";
import { SortContex } from "../ui/wrapper-sort/wrapper-sort";
import { ISortedParamsTestDTO } from "@entities/test/api/types";

export const useSortedTests = () => {
  const paramTests = useContext(WrapperTestsContext);
  const [isValuesSort, setValuesSort] = useState<ISortedParamsTestDTO>();
  console.log("isValuesSort", isValuesSort);
  const setTests = paramTests?.setTests;
  const currentTests = paramTests?.tests;

  console.log("paramTests", paramTests);

  // name, type и site должны быть отсортированы в алфавитном порядке

  useEffect(() => {
    if (!currentTests || !isValuesSort) return;

    const keysByAlphabet = Object.keys(isValuesSort).filter((key) =>
      sortKeysByAlphabet.includes(key as TSortKeysByAlphabet)
    ) as TSortKeysByAlphabet[];

    if (hasInParamKeysBySort(isValuesSort, keysByAlphabet)) {
      const sortedTestsByAlphabet = sortedByAlphabet<INormilizeDataTests>(
        keysByAlphabet,
        currentTests,
        isValuesSort.name
      );

      setTests?.(sortedTestsByAlphabet);
    }

    if (isValuesSort.status) {
      const sortedByStatus = sortedTestsByStatus(
        currentTests,
        isValuesSort.status
      );

      setTests?.([...sortedByStatus]);
    }
    console.log("currentTests", currentTests);
  }, [isValuesSort, setTests]);

  return {
    isValuesSort,
    setValuesSort,
  };
};
