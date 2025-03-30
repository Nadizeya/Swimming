import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { authenticationRoutes, protectedRoutes } from "@/routes/routes.config";
import NotFound from "@/pages/NotFound";
import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";
import MainLoading from "./shared/MainLoading";
import Layout from "./layout/Layout";

// Functions to handle private routes
const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

// const ProtectedRoute = () => {
//   return isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />;
// };

const ProtectedRoute = () => {
  return <Outlet />;
};

// Configuring routes for App
const AppRoutes = () => {
  const routes = [
    {
      element: (
        <Suspense fallback={<MainLoading />}>
          <Outlet />
        </Suspense>
      ),
      children: [...authenticationRoutes],
    },
    {
      element: (
        <Suspense fallback={<MainLoading />}>
          <ProtectedRoute />
        </Suspense>
      ),
      children: [
        {
          element: <Layout />,
          children: protectedRoutes,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ];

  return useRoutes(routes);
};

const App = () => (
  <Router>
    <AppRoutes />
  </Router>
);

export default App;
