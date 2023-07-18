import { Navigate, Outlet, useRoutes } from "react-router-dom";
import React, { Suspense } from "react";
import { routes } from "../types/constants";
import MainLayout from "../ui/components/templates/MainLayout";

const TopPage = React.lazy(() => import("./../ui/pages/TopPage"));
const MyRecord = React.lazy(() => import("./../ui/pages/MyRecord"));
const Collumn = React.lazy(() => import("../ui/pages/Collumn"));
const NotFound = React.lazy(() => import("./../ui/pages/NotFound"));

const App = () => {
  return (
    <Suspense fallback={null}>
      <Outlet />
    </Suspense>
  );
};

const router = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: routes.top_page,
        element: <TopPage />,
      },
      {
        path: routes.my_record,
        element: <MyRecord />,
      },
      {
        path: routes.collumn,
        element: <Collumn />,
      },
      {
        path: "*",
        element: <Navigate to={routes.not_found} />,
      },
    ],
  },
  {
    path: routes.not_found,
    element: <NotFound />,
  },
];

const Routes = () => <MainLayout>{useRoutes([...router])}</MainLayout>;

export default Routes;
