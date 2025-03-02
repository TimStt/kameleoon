import React, { useContext } from "react";
import styles from "./dashboard-tests.module.scss";
import Filters from "./ui/filters";
import cls from "classnames";

import TestCard from "@entities/test/ui/test-card/ui";
import ButtonActionCard from "@features/tests/conclusion-test/ui/button-action-card/button-action-card";
import { NotFound } from "./ui/not-found";
import { WrapperTestsContext } from "@entities/test/ui/wrapper-tests/wrapper-tests";
import { SearchInput } from "./ui/search-input";
import UIPageLoader from "@shared/ui/ui-page-loader";

const DashboardTests = () => {
  const paramTests = useContext(WrapperTestsContext);

  const list = paramTests?.tests;

  const loading = paramTests?.isLoading;
  return (
    <>
      {loading ? (
        <UIPageLoader />
      ) : (
        <div className={cls(styles.root, "container")}>
          <SearchInput />
          <Filters />
          <div className={styles.content}>
            {!list ? (
              <NotFound />
            ) : (
              list.map((test) => (
                <TestCard
                  key={test.id}
                  {...test}
                  renderButtonAction={
                    <ButtonActionCard id={test.id} status={test.status} />
                  }
                />
              ))
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardTests;
