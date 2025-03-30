import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CoachAction() {
  const navigate = useNavigate();
  return (
    <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-2xl font-bold text-swimigo-red">Coaches</h2>

      <div className="flex items-center gap-4">
        <Button
          className="bg-swimigo-red text-white cursor-pointer rounded-md"
          onClick={() => navigate("/coaches/add")}
        >
          <Plus className=" h-4 w-4" />
          Add Coach
        </Button>
        <Button variant="outline" size="icon">
          <Search className="w-4 h-4" />
        </Button>
        <Button variant="outline" size="icon">
          <Filter className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
