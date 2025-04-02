import {
  LazyCoachAdd,
  LazyCoachEdit,
  LazyCoaches,
  LazyCoachView,
  LazyDashboard,
  LazyProfile,
  LazyLessonAdd,
  LazyLessonEdit,
  LazyLessonView,
  LazyLessons,
} from "./lazy";
import { Routes } from "./routeType";

const privateRoutes: Routes = [
  { key: "dashboard", path: "/", element: <LazyDashboard /> },
  { key: "profile", path: "/profile", element: <LazyProfile /> },

  //Coach routes
  { key: "coaches", path: "/coaches", element: <LazyCoaches /> },
  { key: "coach-add", path: "/coaches/add", element: <LazyCoachAdd /> },
  { key: "coach-view", path: "/coaches/view/:id", element: <LazyCoachView /> },
  { key: "coach-edit", path: "/coaches/edit/:id", element: <LazyCoachEdit /> },

  //Lesson routes
  { key: "lessons", path: "/lessons", element: <LazyLessons /> },
  { key: "lesson-add", path: "/lessons/add", element: <LazyLessonAdd /> },
  {
    key: "lesson-view",
    path: "/lessons/view/:id",
    element: <LazyLessonView />,
  },
  {
    key: "lesson-edit",
    path: "/lessons/edit/:id",
    element: <LazyLessonEdit />,
  },
];

export default privateRoutes;
