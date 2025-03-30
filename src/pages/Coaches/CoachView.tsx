import { CoachForm, CoachFormValues } from "./components/CoachForm";

const mockCoachData: CoachFormValues = {
  fullName: "John Doe",
  sex: "male",
  position: "head",
  status: "active",
  email: "john.doe@example.com",
  contactNumber: "1234567890",
};

const CoachView = () => {
  return (
    <div className="max-w-2xl p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-swimigo-red mb-6">View Coach</h2>
      <CoachForm
        mode="view"
        defaultValues={mockCoachData}
        onSubmit={() => {}}
        profilePhotoUrl="https://cdn.example.com/uploads/john-doe.jpg" // 👈 pass this
      />
    </div>
  );
};

export default CoachView;
