import { useLoaderData } from "react-router-dom";

export const useGetPrefetchData = <Data>() => {
  const data = useLoaderData() as Data | undefined;
  return data;
};
