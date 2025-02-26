import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Routes>
      <Route
        path=""
        element={<Suspense fallback={<span>loading...</span>}></Suspense>}
        index
      />
    </Routes>
  );
};
