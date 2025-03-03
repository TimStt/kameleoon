import React, { useDeferredValue, useState } from "react";

import { useQueryParamAction } from "@shared/helpers/use-query-param-action";
import { NAME_SEARCH_PARAM } from "../../constants/constants";
import { useSearchTests } from "../../model/use-search-tests";
import styles from "./search-input.module.scss";
import cls from "classnames";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import debounce from "@shared/helpers/debounce";

interface SearchBarProps {
  classNameField: string;
  classNameCount: string;
}

const SearchTests = ({ classNameField, classNameCount }: SearchBarProps) => {
  const { currentTests, handleChangeInput, isValueInput } = useSearchTests();

  return (
    <>
      <input
        className={classNameField}
        type="search"
        placeholder="What test are you looking for?"
        onChange={handleChangeInput}
        value={isValueInput || ""}
      />
      <span className={classNameCount}>{currentTests?.length} tests</span>
    </>
  );
};

export default SearchTests;
