import { IQueryParamsDTO, IQueryParamsTestDTO } from "@entities/test/api/types";
import { WrapperTestsContext } from "@entities/test/ui/wrapper-tests/wrapper-tests";
import { sortedByAlphabet } from "@shared/helpers/sorted-by-alphabet/index";
import { useQueryParamAction } from "@shared/helpers/use-query-param-action";
import { useContext, useEffect } from "react";
import { sortKeysByAlphabet, TSortKeysByAlphabet } from "../constants";
import { hasInParamKeysBySort } from "./has-in-param-keys-by-sort";
import { INormilizeDataTests } from "@entities/test/api/normilize-data-tests";
import { sortedTestsByStatus } from "./sorted-status";

export const useSortedTests = () => {
  const tests = useContext(WrapperTestsContext);
  const setTests = tests?.setTests;
  const currentTests = tests?.tests;

  const queriesParams =
    useQueryParamAction().getAllParams<IQueryParamsTestDTO>();
  const query = useQueryParamAction().get("name");

  console.log("query name   ", query);
  // name, type и site должны быть отсортированы в алфавитном порядке

  useEffect(() => {
    if (!currentTests || !queriesParams) return;

    const keysByAlphabet = Object.keys(queriesParams).filter((key) =>
      sortKeysByAlphabet.includes(key as TSortKeysByAlphabet)
    ) as TSortKeysByAlphabet[];

    if (hasInParamKeysBySort(queriesParams, keysByAlphabet)) {
      const sortedTestsByAlphabet = sortedByAlphabet<INormilizeDataTests>(
        currentTests,
        keysByAlphabet,
        queriesParams.name
      );

      setTests?.(sortedTestsByAlphabet);
    }

    if (queriesParams.status) {
      const sortedByStatus = sortedTestsByStatus(
        currentTests,
        queriesParams.status
      );
      setTests?.(sortedByStatus);
    }
  }, [queriesParams.name]);
};
