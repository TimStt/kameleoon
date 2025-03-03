import React, { useContext } from "react";
import styles from "./dashboard-tests.module.scss";
import Filters from "@features/tests/sorted/ui/filters";
import cls from "classnames";

import { WrapperTestsContext } from "@entities/test/ui/wrapper-tests/wrapper-tests";
import { SearchInput } from "./ui/search-input";
import UIPageLoader from "@shared/ui/ui-page-loader";

import ListTests from "./ui/list-tests";

const DashboardTests = () => {
  const paramTests = useContext(WrapperTestsContext);

  const loading = paramTests?.isLoading;

  console.log("trigger");
  return (
    <>
      {loading ? (
        <UIPageLoader />
      ) : (
        <div className={cls(styles.root, "container")}>
          <SearchInput />

          <ListTests />
        </div>
      )}
    </>
  );
};

export default DashboardTests;
