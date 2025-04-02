import { Lesson } from "./lessonType";

export const dummyLessons: Lesson[] = [
  {
    id: "1f2d3a4b-5678-4cde-9f10-123456789abc",
    title: "Swimming Lesson 101",
    description: "Basic swim skills and water confidence building.",
    capacity: 12,
    startDate: "2025-01-28T10:00:00Z",
    endDate: "2025-02-28T11:00:00Z",
    location: "Jurong East Swimming Complex",
    price: 30.0,
    status: "active",
  },
  {
    id: "2e3f4b5c-6789-4def-8a21-abcdef123456",
    title: "Swimming Lesson 102",
    description: "Beginner strokes and breathing techniques.",
    capacity: 10,
    startDate: "2025-09-31T11:00:00Z", // Note: 2025-09-31 is invalid, change to 30 if you need it realistic
    endDate: "2025-10-31T11:30:00Z",
    location: "Katong Active SG Swimming Complex",
    price: 28.5,
    status: "inactive",
  },
  {
    id: "3a4b5c6d-7890-4abc-9b32-fedcba654321",
    title: "Swimming Lesson 103",
    description: "Intermediate freestyle and backstroke practice.",
    capacity: 8,
    startDate: "2024-03-18T08:00:00Z",
    endDate: "2024-04-18T09:00:00Z",
    location: "Jurong West Swimming Complex",
    price: 32.75,
    status: "active",
  },
];
