import { apiInstance } from "@shared/api";
import { API_GET_TESTS } from "@shared/constans/api";
import { ITestDTO } from "../types";

export const getTestsApi = async (query?: string) => {
  const response = await apiInstance.get<ITestDTO[]>(API_GET_TESTS(query));

  return response.data;
};
