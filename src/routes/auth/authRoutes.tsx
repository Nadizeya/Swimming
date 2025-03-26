import { Routes } from "../routeType";
import { LazyLogin } from "../lazy";

const authRoutes: Routes = [
  {
    key: "login",
    path: "/login",
    element: <LazyLogin />,
  },
];

export default authRoutes;
