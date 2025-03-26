import Icon from "@/components/Icon";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Logout from "/assets/Icons/ico-logout.svg";
import Settings from "/assets/Icons/ico-settings.svg";
import Noti from "/assets/Icons/ico-notification.svg";

const SearchBar = () => {
  return (
    <div className="relative w-full max-w-sm">
      <span className="absolute inset-y-0 left-3 flex items-center text-muted-foreground">
        <Search className="w-4 h-4" />
      </span>
      <Input type="text" placeholder="Search" className="pl-10 h-10" />
    </div>
  );
};

export default function Header() {
  return (
    <header className="h-20  flex pt-6 px-4 justify-between bg-transparent">
      <Logo src="/assets/logo.png" className="w-44" />

      <div className="flex items-center gap-3">
        <SearchBar />
        <Button
          variant="outline"
          className="bg-swimigo-blue border-none cursor-pointer"
          size="icon"
        >
          <Icon src={Noti} />
        </Button>
        <Button
          variant="outline"
          className="bg-swimigo-blue border-none cursor-pointer"
          size="icon"
        >
          <Icon src={Settings} />
        </Button>
        <Button
          variant="outline"
          className="bg-swimigo-blue border-none cursor-pointer"
          size="icon"
        >
          <Icon src={Logout} width={18} height={18} />
        </Button>
      </div>
    </header>
  );
}
