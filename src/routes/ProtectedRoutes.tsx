import {
  LazyCoachAdd,
  LazyCoaches,
  LazyCoachView,
  LazyDashboard,
  LazyProfile,
} from "./lazy";
import { Routes } from "./routeType";

const privateRoutes: Routes = [
  { key: "dashboard", path: "/", element: <LazyDashboard /> },
  { key: "profile", path: "/profile", element: <LazyProfile /> },
  { key: "coaches", path: "/coaches", element: <LazyCoaches /> },
  { key: "coach-add", path: "/coaches/add", element: <LazyCoachAdd /> },
  { key: "coach-view", path: "/coaches/view/:id", element: <LazyCoachView /> },
];

export default privateRoutes;
