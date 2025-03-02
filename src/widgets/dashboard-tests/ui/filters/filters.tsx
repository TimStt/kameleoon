import React, { useState } from "react";

import styles from "../../dashboard-tests.module.scss";
import { useQueryParamAction } from "@shared/helpers/use-query-param-action";
import { useSortedTests } from "@features/tests/sorted/model/use-sorted-tests";
const Filters = () => {
  useSortedTests();
  const { set, get } = useQueryParamAction();

  const handleSort = (key: string) => {
    set(key, get(key) === "asc" ? "desc" : "asc");
  };

  const getTitle = (key: string) => {
    return `${
      new URLSearchParams(window.location.search).get(key) === "asc" ? "↑" : "↓"
    }`;
  };
  return (
    <div className={styles.filters}>
      <button onClick={() => handleSort("name")}>Name</button>
      <div className={styles.filters__block}>
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
