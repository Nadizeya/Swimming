import { mockLessons } from "../data/lessons";

export const lessonRoutes = function (this: any) {
  this.get("/api/v1/lessons", () => {
    return mockLessons;
  });
};
