import { apiInstance } from "@shared/api";
import { API_GET_TESTS } from "@shared/constans/api";
import { ITestDTO } from "./types";

export const getTestsApi = async (
  setIsLoading?: (isLoading?: boolean) => void,
  query?: string
) => {
  try {
    setIsLoading?.(true);
    const response = await apiInstance.get<ITestDTO[]>(API_GET_TESTS(query));

    return response.data;
  } catch (error) {
    console.log(error);
  } finally {
    setIsLoading?.(false);
  }
};
