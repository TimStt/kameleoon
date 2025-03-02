import React, { useDeferredValue, useState } from "react";

import { useQueryParamAction } from "@shared/helpers/use-query-param-action";
import { NAME_SEARCH_PARAM } from "../../constants/constants";
import { useSearchTests } from "../../model/use-search-tests";
import styles from "./search-input.module.scss";
import cls from "classnames";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import debounce from "@shared/helpers/debounce";

interface SearchBarProps {
  classNameField: string;
  classNameCount: string;
}

const SearchTests = ({ classNameField, classNameCount }: SearchBarProps) => {
  const { currentTests } = useSearchTests();
  const { set, get } = useQueryParamAction();
  const [searchValue, setSearchValue] = useState(get(NAME_SEARCH_PARAM) || "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(() => e.target.value);

    // const params = new URLSearchParams(location.search);
    // params.set(NAME_SEARCH_PARAM, e.target.value);
    // navigate(`?${params.toString()}`, { replace: true });

    set(NAME_SEARCH_PARAM, e.target.value);
    // debounce(setParam, 1000)(NAME_SEARCH_PARAM, deferredValue);
  };

  return (
    <>
      <input
        className={classNameField}
        type="search"
        placeholder="What test are you looking for?"
        onChange={handleChange}
        value={searchValue || ""}
      />
      <span className={classNameCount}>{currentTests?.length} tests</span>
    </>
  );
};

export default SearchTests;
