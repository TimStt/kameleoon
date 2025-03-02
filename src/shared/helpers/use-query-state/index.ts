import { useEffect, useState } from "react";

export const useQueryState = () => {
  const [query, setQuery] = useState(
    new URLSearchParams(window.location.search)
  );

  useEffect(() => {
    const handlePopState = () => {
      setQuery(new URLSearchParams(window.location.search));
      console.log("trigger query state");
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return query;
};
