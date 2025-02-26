export const API_GET_TESTS = (query?: string) =>
  `/tests ${query ? `?${query}` : ""}` as const;
export const API_GET_SITES = "/sites" as const;
