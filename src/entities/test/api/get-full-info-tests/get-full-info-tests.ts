import { transformObjectByParams } from "@shared/helpers/transform-object-by-param";
import { getSitesApi } from "../get-sites";
import { getTestsApi } from "../get-tests";
import { IFullInfoTestsDTO, IQueryParamsTestDTO } from "../types";
import React from "react";

import { LoaderFunctionArgs } from "react-router-dom";
import { getQueryParamsInRequest } from "@shared/helpers/get-query-params-in-request";

export const getFullInfoTests = async (
  setIsLoading?: React.Dispatch<React.SetStateAction<boolean>>
): Promise<IFullInfoTestsDTO | null> => {
  try {
    setIsLoading?.(true);

    // const queryParams =
    //   getQueryParamsInRequest(param).getQueryParams<IQueryParamsTestDTO>();

    const response = await Promise.all([getTestsApi(), getSitesApi()]);

    return { tests: response[0], sites: response[1] };
  } catch (error) {
    return null;
  } finally {
    setIsLoading?.(false);
  }
};
