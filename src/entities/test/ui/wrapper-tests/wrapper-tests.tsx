import {
  INormilizeDataTests,
  normilizeDataTests,
} from "@entities/test/api/normilize-data-tests";
import { useGetTests } from "@entities/test/api/use-get-tests";

import { useGetLoadingPrefetch } from "@shared/helpers/use-get-loading-prefetch";
import { fabricCreateContext } from "@shared/libs/context-wrapper/create-context";
import React, { useEffect, useMemo, useState } from "react";

export interface IWrapperTests {
  tests?: INormilizeDataTests[];
  isLoading?: boolean;
  setTests: React.Dispatch<
    React.SetStateAction<INormilizeDataTests[] | undefined>
  >;
  setRefresh: (refresh: boolean) => void;
}

export const WrapperTestsContext = fabricCreateContext<IWrapperTests>();

const WrapperTests = ({ children }: { children: React.ReactNode }) => {
  const tests = useGetTests();
  const [refresh, setRefresh] = useState(false);
  const [testsState, setTestsState] = useState<INormilizeDataTests[]>();
  const isLoadingTests = useGetLoadingPrefetch();
  console.log("tests", tests);

  const normilizeTests = normilizeDataTests(tests);

  useEffect(() => {
    if ((normilizeTests && !testsState) || refresh) {
      setTestsState(normilizeTests);
      setRefresh(false);
    }
  }, [normilizeTests]);

  return (
    <WrapperTestsContext.Provider
      value={{
        tests: testsState,
        isLoading: isLoadingTests,
        setTests: setTestsState,
        setRefresh,
      }}
    >
      {children}
    </WrapperTestsContext.Provider>
  );
};

export default WrapperTests;
