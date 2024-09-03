import { createApi } from '@reduxjs/toolkit/query/react'
import {client} from "@app/@http-base-query";

export const api = createApi({
    reducerPath: 'api',
    baseQuery: client,
    endpoints: () => ({}),
});
