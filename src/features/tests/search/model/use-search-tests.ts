import { useCallback, useContext, useState } from "react";

import { useEffect } from "react";

import { getFullInfoTests } from "@entities/test/api";
import { useQueryParamAction } from "@shared/helpers/use-query-param-action";
import { NAME_SEARCH_PARAM } from "../constants/constants";
import { useGetTests } from "@entities/test/api/use-get-tests";
import debounce from "@shared/helpers/debounce";
import { INormilizeDataTests } from "@entities/test/api/normilize-data-tests";
import { TestContext } from "node:test";
import { WrapperTestsContext } from "@entities/test/ui/wrapper-tests/wrapper-tests";
import { useLocation, useNavigate } from "react-router-dom";

export const useSearchTests = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<INormilizeDataTests[]>([]);

  const query = useQueryParamAction().get(NAME_SEARCH_PARAM);

  const tests = useContext(WrapperTestsContext);
  const setTests = tests?.setTests;
  const currentTests = tests?.tests;
  const setRefresh = tests?.setRefresh;

  const searchTests = useCallback(() => {
    if (!setTests || !currentTests) return;

    if (!query) {
      setRefresh?.(true);
      return;
    }

    const searchedTests = currentTests?.filter((test) =>
      test.name.toLowerCase().includes(query?.toLowerCase() || "")
    );

    if (searchedTests) {
      setResult(searchedTests);
      setIsLoading(false);
      setTests(searchedTests);
    }
  }, [query]);

  useEffect(() => {
    console.log("currentTests   ", currentTests);
    console.log("result   ", result);

    setIsLoading(true);
    debounce(searchTests, 500)();
  }, [query]);

  return { isLoading, currentTests };
};
