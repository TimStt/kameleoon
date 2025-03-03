import { ISortedParamsTestDTO } from "@entities/test/api/types";
import { fabricCreateContext } from "@shared/libs/context-wrapper/create-context";
import React from "react";
import { useSortedTests } from "../../model/use-sorted-tests";

export interface ISortedParamsContex {
  sortedValues?: ISortedParamsTestDTO;
  setSortedParams: (params: ISortedParamsTestDTO) => void;
}

export const SortContex = fabricCreateContext<ISortedParamsContex>();

const WrapperSort = ({ children }: { children: React.ReactNode }) => {
  const { setValuesSort, isValuesSort } = useSortedTests();
  return (
    <SortContex.Provider
      value={{
        sortedValues: isValuesSort,
        setSortedParams: setValuesSort,
      }}
    >
      {children}
    </SortContex.Provider>
  );
};

export default WrapperSort;
