import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Filter } from "lucide-react";

export default function CoachAction() {
  return (
    <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-2xl font-semibold">Coaches</h2>

      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon">
          <Search className="w-4 h-4" />
        </Button>
        <Button variant="outline" size="icon">
          <Filter className="w-4 h-4" />
        </Button>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Coach
        </Button>
      </div>
    </div>
  );
}
