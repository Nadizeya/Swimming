import { Outlet } from "react-router-dom";
import Header from "./Header";
import { AppSidebar } from "./AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

const Layout = () => {
  return (
    <div className="min-h-screen  bg-[linear-gradient(to_bottom,_#E8E8E8,_#66D1E6,_#3DBED8)]">
      <Header />
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full overflow-x-auto p-4">
          <Outlet />
        </main>
      </SidebarProvider>
    </div>
  );
};

export default Layout;
