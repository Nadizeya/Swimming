// mirage/routes/coachRoutes.ts
import { mockCoaches } from "../data/coaches";
import { Response } from "miragejs";

export const coachRoutes = function (this: any) {
  this.get("/v2/users", (schema: any, request: any) => {
    const { roles, limit, page, search, sortBy, sortOrder } =
      request.queryParams;

    console.log("🔥 Incoming request:", {
      roles,
      page,
      limit,
      search,
      sortBy,
      sortOrder,
    });

    if (roles !== "coach") {
      return new Response(
        400,
        {},
        { success: false, error: "Only 'coach' role is supported in mock" }
      );
    }

    let filtered = [...mockCoaches];

    if (search) {
      filtered = filtered.filter(
        (coach) =>
          coach.fullName.toLowerCase().includes(search.toLowerCase()) ||
          coach.email.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (sortBy) {
      filtered.sort((a, b) => {
        const aVal = a[sortBy as keyof typeof a];
        const bVal = b[sortBy as keyof typeof b];
        if (aVal < bVal) return sortOrder === "desc" ? 1 : -1;
        if (aVal > bVal) return sortOrder === "desc" ? -1 : 1;
        return 0;
      });
    }

    const perPage = parseInt(limit) || 10;
    const currentPage = parseInt(page) || 1;
    const start = (currentPage - 1) * perPage;
    const paginated = filtered.slice(start, start + perPage);

    return {
      success: true,
      data: paginated,
      pagination: {
        total: filtered.length,
        currentPage,
        totalPages: Math.ceil(filtered.length / perPage),
        limit: perPage,
      },
    };
  });
};
