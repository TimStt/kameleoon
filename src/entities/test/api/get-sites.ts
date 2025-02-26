import { apiInstance } from "@shared/api";
import { API_GET_SITES } from "@shared/constans/api";
import { ISiteDTO } from "./types";

export const getSitesApi = async (
  setIsLoading?: (isLoading?: boolean) => void
) => {
  try {
    setIsLoading?.(true);
    const response = await apiInstance.get<ISiteDTO[]>(API_GET_SITES);

    return response.data;
  } catch (error) {
    console.log(error);
  } finally {
    setIsLoading?.(false);
  }
};
