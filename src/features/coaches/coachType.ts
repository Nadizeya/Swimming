export type Coach = {
  id: number;
  fullName: string;
  position: string;
  sex: "Male" | "Female";
  photo?: string;
  email: string;
  phone: string;
  status: "active" | "pending" | "inactive";
};
