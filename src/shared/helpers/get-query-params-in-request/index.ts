import { LoaderFunctionArgs } from "react-router-dom";

export const getQueryParamsInRequest = (param: LoaderFunctionArgs<any>) => {
  const url = new URL(param.request.url);
  const searchParams = url.searchParams;

  const getQueryParam = <Param>(name: string) => {
    return searchParams.get(name) as Param;
  };

  const getQueryParams = <ObjectParams>() => {
    return Object.entries(searchParams.entries()).reduce(
      (acc, [key, value]) => {
        return { ...acc, [key]: value } as ObjectParams;
      },
      {} as ObjectParams
    );
  };

  return { getQueryParam, getQueryParams };
};
