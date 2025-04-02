import { Button } from "@/components/ui/button";
import { CoachForm, CoachFormValues } from "./components/CoachForm";
import { Pencil } from "lucide-react";
import { useNavigate } from "react-router-dom";

const mockCoachData: CoachFormValues = {
  fullName: "John Doe",
  sex: "male",
  position: "head",
  status: "active",
  email: "john.doe@example.com",
  contactNumber: "1234567890",
};

const CoachView = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-2xl p-6 bg-white rounded-2xl shadow-md">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold text-swimigo-red mb-6">View Coach</h2>
        <Button
          variant="outline"
          className="rounded-md border-swimigo-red  font-semibold text-swimigo-red"
          onClick={() => navigate("/coaches/edit/1")}
        >
          <Pencil width={2} height={2} />
          Edit Coach
        </Button>
      </div>
      <CoachForm
        mode="view"
        defaultValues={mockCoachData}
        onSubmit={() => {}}
        profilePhotoUrl="https://cdn.example.com/uploads/john-doe.jpg" // 👈 pass this
      />
      <div className="flex justify-end gap-4">
        <Button
          className="border-none "
          variant="ghost"
          onClick={() => navigate(-1)}
        >
          Go back
        </Button>
        <Button
          type="reset"
          variant="outline"
          className="border-swimigo-grey text-swimigo-grey rounded-xl"
        >
          Delete Coach
        </Button>
      </div>
    </div>
  );
};

export default CoachView;
