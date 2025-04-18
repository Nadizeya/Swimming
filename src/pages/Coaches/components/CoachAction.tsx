import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CoachActionProps {
  search: string;
  onSearchChange: (value: string) => void;
}

export default function CoachAction({
  search,
  onSearchChange,
}: CoachActionProps) {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-2xl font-bold text-swimigo-red">Coaches</h2>

      <div className="flex items-center gap-4">
        <Button
          className="bg-swimigo-red text-white cursor-pointer rounded-md"
          onClick={() => navigate("/coaches/add")}
        >
          <Plus className="h-4 w-4" />
          Add Coach
        </Button>
        {showSearch && (
          <Input
            placeholder="Search coaches..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-60 h-9 transition-all"
          />
        )}

        <Button
          variant="outline"
          size="icon"
          onClick={() => setShowSearch((prev) => !prev)}
        >
          <Search className="w-4 h-4" />
        </Button>

        <Button variant="outline" size="icon">
          <Filter className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
