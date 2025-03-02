import { WrapperTests } from "@entities/test/ui/wrapper-tests";
import DashboardTests from "@widgets/dashboard-tests";

import Layout from "@widgets/layout/layout";

export const Dashboard = () => {
  return (
    <WrapperTests>
      <Layout title="Dashboard">
        <DashboardTests />
      </Layout>
    </WrapperTests>
  );
};
