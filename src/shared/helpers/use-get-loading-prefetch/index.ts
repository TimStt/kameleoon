import { useNavigation } from "react-router-dom";

export const useGetLoadingPrefetch = () => {
  const { state } = useNavigation();
  return state === "loading";
};
