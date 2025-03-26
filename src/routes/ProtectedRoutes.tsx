import { LazyCoaches, LazyDashboard, LazyProfile } from "./lazy";
import { Routes } from "./routeType";

const privateRoutes: Routes = [
  { key: "dashboard", path: "/", element: <LazyDashboard /> },
  { key: "profile", path: "/profile", element: <LazyProfile /> },
  { key: "coaches", path: "/coaches", element: <LazyCoaches /> },
];

export default privateRoutes;
