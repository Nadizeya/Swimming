// data/coach-data.ts

import { Coach } from "./coachType";

export const dummyCoaches: Coach[] = [
  {
    id: 1,
    fullName: "Alice Johnson",
    position: "Head Coach",
    sex: "Female",
    photo: "/public/assets/logo.png",
    email: "alice@swimigo.com",
    phone: "123-456-7890",
    status: "active",
  },
  {
    id: 2,
    fullName: "Bob Smith",
    position: "Assistant Coach",
    sex: "Male",
    email: "bob@swimigo.com",
    phone: "987-654-3210",
    status: "pending",
  },
  {
    id: 3,
    fullName: "Clara Lee",
    position: "Junior Coach",
    sex: "Female",
    photo: "/public/assets/logo.png",
    email: "clara@swimigo.com",
    phone: "555-123-4567",
    status: "inactive",
  },
];
