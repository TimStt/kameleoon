import React, { useContext, useState } from "react";

import { useQueryParamAction } from "@shared/helpers/use-query-param-action";
import { useSortedTests } from "@features/tests/sorted/model/use-sorted-tests";
import style from "./filters.module.scss";
import { ISortedParamsTestDTO } from "@entities/test/api/types";
const Filters = () => {
  const { setValuesSort, isValuesSort } = useSortedTests();

  const handleSort = (key: keyof ISortedParamsTestDTO) => {
    setValuesSort({
      ...isValuesSort,
      [key]: isValuesSort?.[key] === "asc" ? "desc" : "asc",
    });
  };

  const getTitle = (key: keyof ISortedParamsTestDTO) => {
    return `${isValuesSort?.[key] === "asc" ? "↑" : "↓"}`;
  };
  return (
    <div className={style.root}>
      <button onClick={() => handleSort("name")}>Name</button>
      <div className={style.root__block}>
        <button onClick={() => handleSort("type")} title={getTitle("type")}>
          Type
        </button>
        <button onClick={() => handleSort("status")} title={getTitle("status")}>
          Status
        </button>
        <button onClick={() => handleSort("site")} title={getTitle("site")}>
          Site
        </button>
      </div>
    </div>
  );
};

export default Filters;
