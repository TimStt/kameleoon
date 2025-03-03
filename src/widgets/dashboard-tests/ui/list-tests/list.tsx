import React, { useContext } from "react";
import { NotFound } from "../not-found";
import TestCard from "@entities/test/ui/test-card/ui";
import ButtonActionCard from "@features/tests/conclusion-test/ui/button-action-card/button-action-card";
import { WrapperTestsContext } from "@entities/test/ui/wrapper-tests/wrapper-tests";
import styles from "../../dashboard-tests.module.scss";
import Filters from "@features/tests/sorted/ui/filters";

const ListTests = () => {
  const paramTests = useContext(WrapperTestsContext);

  const list = paramTests?.tests;
  console.log("list", list);
  return (
    <>
      {!list?.length ? (
        <NotFound />
      ) : (
        <>
          <Filters />
          <div className={styles.content}>
            {list.map((test) => (
              <TestCard
                key={test.id}
                {...test}
                renderButtonAction={
                  <ButtonActionCard id={test.id} status={test.status} />
                }
              />
            ))}
          </div>{" "}
        </>
      )}
    </>
  );
};

export default ListTests;
