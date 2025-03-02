import { useSearchParams, useLocation } from "react-router-dom";

export const usePathnameURL = () => {
  const searchParams = useSearchParams();
  const pathname = useLocation().pathname;
  const params = new URLSearchParams(searchParams?.toString());

  return { pathname, params };
};
