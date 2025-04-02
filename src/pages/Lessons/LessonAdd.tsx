import { useState } from "react";
import { CoachForm, CoachFormValues } from "./components/CoachForm";

const CoachAdd = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleSubmit = (data: CoachFormValues) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });
    if (selectedFile) {
      formData.append("photo", selectedFile);
    }
    for (const pair of formData.entries()) {
      console.log(`${pair[0]}:`, pair[1]);
    }
  };

  return (
    <div className="max-w-2xl p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-swimigo-red mb-6">Add Coach</h2>
      <CoachForm
        mode="add"
        onSubmit={handleSubmit}
        onFileSelect={setSelectedFile}
      />
    </div>
  );
};

export default CoachAdd;
