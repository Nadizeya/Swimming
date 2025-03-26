// Icons
import dashboard from "/assets/Icons/ico-dashboard.svg";
import lessons from "/assets/Icons/ico-lessons.svg";
import coaches from "/assets/Icons/ico-coaches.svg";
import swimmer from "/assets/Icons/ico-swimmer.svg";
import referral from "/assets/Icons/ico-referral.svg";
import profile from "/assets/Icons/ico-profile.svg";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Icon from "@/components/Icon";
import { Link, useLocation } from "react-router-dom";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: <Icon src={dashboard} />,
  },
  {
    title: "Profile",
    url: "/profile",
    icon: <Icon src={profile} className="font-medium" />,
  },
  {
    title: "Coaches",
    url: "/coaches",
    icon: <Icon src={coaches} className="font-medium" />,
  },
  {
    title: "Lessons",
    url: "#",
    icon: <Icon src={lessons} />,
  },
  {
    title: "Swimmers",
    url: "#",
    icon: <Icon src={swimmer} />,
  },
  {
    title: "Referral",
    url: "#",
    icon: <Icon src={referral} />,
  },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const isActive = location.pathname === item.url;

                return (
                  <SidebarMenuItem
                    key={item.title}
                    className={isActive ? "bg-swimigo-blue " : ""}
                  >
                    <SidebarMenuButton asChild>
                      <Link to={item.url} className="font-semibold">
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
