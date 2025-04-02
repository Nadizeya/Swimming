export type LessonStatus = "active" | "inactive"; // Adjust based on enum values

export interface Lesson {
  id: string; // UUID
  title: string;
  description: string;
  capacity: number; // minimum: 1
  startDate: string; // ISO date-time string
  endDate: string; // ISO date-time string
  location: string;
  price: number;
  status: LessonStatus;
}
