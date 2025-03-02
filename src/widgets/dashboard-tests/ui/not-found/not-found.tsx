import React from "react";
import styles from "../../dashboard-tests.module.scss";
import { UIButton } from "@shared/ui/ui-button";
import { useNavigate } from "react-router-dom";
import { useQueryParamAction } from "@shared/helpers/use-query-param-action";
import { NAME_SEARCH_PARAM } from "@features/tests/search/constants/constants";
import { PATH_DASHBOARD } from "@shared/constans/paths";

const NotFound = () => {
  const { cleanAllParams: reset } = useQueryParamAction();
  const handleReset = () => {
    reset();
  };
  return (
    <div className={styles.not_found}>
      <span className={styles.not_found_text}>
        Your search did not match any results.
      </span>
      <UIButton className={styles.not_found_button} onClick={handleReset}>
        Reset
      </UIButton>
    </div>
  );
};

export default NotFound;
