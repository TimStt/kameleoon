"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathnameURL } from "../use-pathname-URL";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useQueryState } from "../use-query-state";

export const useQueryParamAction = () => {
  const query = useQueryState();
  const get = useCallback(
    (paramsName: string) => query.get(paramsName),
    [query]
  );

  const remove = (paramsName: string, value?: string) => {
    query.delete(paramsName);

    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}?${query.toString()}`
    );
  };

  const set = (paramsName: string, value: string | null, isDelete = false) => {
    query.set(paramsName, value || "");

    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}?${query.toString()}`
    );
  };

  const getAllParams = <Params>() => {
    return Object.fromEntries(query.entries()) as Params;
  };

  const cleanAllParams = () => {
    window.history.replaceState(null, "", window.location.pathname);
  };

  return {
    get,

    getAllParams,
    set,
    remove,
    cleanAllParams,
  };
};
