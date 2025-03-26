import authRoutes from "@/routes/auth/authRoutes";
import privateRoutes from "./ProtectedRoutes";

export const authenticationRoutes = [...authRoutes];
export const protectedRoutes = [...privateRoutes];
