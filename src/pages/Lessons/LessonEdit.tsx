import { Button } from "@/components/ui/button";
import { CoachForm, CoachFormValues } from "./components/CoachForm";
import { useNavigate } from "react-router-dom";

const mockCoachData: CoachFormValues = {
  fullName: "John Doe",
  sex: "male",
  position: "head",
  status: "active",
  email: "john.doe@example.com",
  contactNumber: "1234567890",
};

const CoachEdit = () => {
  const navigate = useNavigate();

  const handleUpdate = (data: CoachFormValues) => {
    console.log("Updated Coach:", data);
    navigate("/coaches"); // simulate save and redirect
  };

  return (
    <div className="max-w-2xl p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-swimigo-red mb-6">Edit Coach</h2>

      <CoachForm
        mode="edit"
        defaultValues={mockCoachData}
        onSubmit={handleUpdate}
        profilePhotoUrl="/public/assets/logo.png"
        onFileSelect={(file) => {
          console.log("Selected file:", file);
        }}
      />
    </div>
  );
};

export default CoachEdit;
