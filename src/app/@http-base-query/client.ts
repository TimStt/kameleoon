import {BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {HTTP_UNAUTHORIZED} from "@app/@http-base-query/http-constants.ts";

type FetchArguments = Omit<FetchArgs, 'method'> & {
  method: 'PUT' | 'DELETE' | 'GET' | 'POST' | 'PATCH';
};

const headers: Record<string, string | null> = {};

if (localStorage.getItem('token')) {
  headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
}

export const client = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BACKEND_URL,
  credentials: 'include',
});

export const baseQueryWithReauth: BaseQueryFn<
  FetchArguments,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await client(args, api, extraOptions);

  if (result.error && result.error.status === HTTP_UNAUTHORIZED) {
    const refreshResult = await client(
      { url: '/auth/refresh', method: 'POST' },
      api,
      extraOptions,
    );
    if (refreshResult.data) {
      result = await client(args, api, extraOptions);
    } else {
      await client(
        { url: '/auth/signout', method: 'POST' },
        api,
        extraOptions,
      );
      return result;
    }
  }

  return result;
};
