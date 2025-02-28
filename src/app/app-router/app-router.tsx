import { Suspense } from "react";
import {
  createBrowserRouter,
  Navigate,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { Results } from "@pages/results";
import { getFullInfoTests } from "@entities/test/api";
import {
  PATH_DASHBOARD,
  PATH_FINALIZE,
  PATH_RESULT,
} from "@shared/constans/paths";
import { Dashboard } from "@pages/dashboard";
import { Finalize } from "@pages/finalize";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={PATH_DASHBOARD} />,
  },
  {
    path: PATH_DASHBOARD,
    element: <Dashboard />,
    loader: (query) => getFullInfoTests(query),
    children: [
      {
        path: PATH_RESULT,
        element: <Results />,
      },
      {
        path: PATH_FINALIZE,
        element: <Finalize />,
      },
    ],
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
