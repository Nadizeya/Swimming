import { lazy } from "react";

export const LazyLogin = lazy(() => import("@/pages/Login/Login"));
export const LazyDashboard = lazy(() => import("@/pages/Dashboard/Dashboard"));
export const LazyProfile = lazy(() => import("@/pages/Profile/Profile"));

//Coaches Routes
export const LazyCoaches = lazy(() => import("@/pages/Coaches/CoachList"));
export const LazyCoachAdd = lazy(() => import("@/pages/Coaches/CoachAdd"));
export const LazyCoachView = lazy(() => import("@/pages/Coaches/CoachView"));
