import { getSitesApi } from "src/entities/test/api";

import { getTestsApi } from "src/entities/test/api";
import { normilizeDataTests } from "../model/normilize-data-tests";

export const getFullInfoTests = async (
  setIsLoading: (isLoading: boolean) => void
) => {
  try {
    setIsLoading(true);
    const response = await Promise.all([getTestsApi(), getSitesApi()]);

    return normilizeDataTests({ tests: response[0], sites: response[1] });
  } catch (error) {
    return undefined;
  } finally {
    setIsLoading(false);
  }
};
