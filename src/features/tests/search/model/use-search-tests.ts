import { useState } from "react";

import { useEffect } from "react";
import { getFullInfoTests } from "../api";
import { INormilizeDataTests } from "./normilize-data-tests";

export const useSearchTests = () => {
  const [result, setResult] = useState<INormilizeDataTests[] | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState(false);

  const getTests = async () => {
    const tests = await getFullInfoTests(setIsLoading);
    setResult(tests);
  };

  useEffect(() => {
    getTests();
  }, []);

  return { result, isLoading };
};
