import { useGetPrefetchData } from "@shared/helpers/use-get-prefetch-data";
import { IFullInfoTestsDTO } from "./types";

export const useGetTests = () => useGetPrefetchData<IFullInfoTestsDTO>();
