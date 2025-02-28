import { useGetLoadingPrefetch } from "@shared/helpers/use-get-loading-prefetch";
import UIPageLoader from "@shared/ui/ui-page-loader";
import Layout from "@widgets/layout/layout";
import { useLoaderData, useNavigate, useNavigation } from "react-router-dom";

export const Dashboard = () => {
  const isLoadingTests = useGetLoadingPrefetch();
  return isLoadingTests ? (
    <UIPageLoader />
  ) : (
    <Layout title="Dashboard">home</Layout>
  );
};
