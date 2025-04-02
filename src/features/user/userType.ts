export interface User {
  id: string;
  email: string;
  referralCodeId: string | null;
  phoneNumber: string;
  status: "pending" | "active" | "inactive";
  role: "coach" | "swimmer";
  isFirstLogin: boolean;
  fullName: string;
  profileImage: string | null;
  position: number;
  yearsOfExperience: number | null;
  certificates: string[] | null;
  swimLevels: string[] | null;
  availableDays: string[] | null;
  availableTimes: string[] | null;
  locations: string[] | null;
  poolTypes: string[] | null;
  emergencyContact: any[] | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// Listing User Types
export interface GetUsersParam {
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  roles: "coach" | "swimmer";
}

export interface PaginatedUserResponse {
  success: boolean;
  data: User[];
  pagination: {
    total: number;
    currentPage: number;
    totalPages: number;
    limit: number;
  };
}

// Adding User Types

export interface CreateUserRequest {
  email: string;
  phoneNumber: string;
  password: string;
  role: "coach" | "swimmer";
  fullName: string;
  position: number;
  yearsOfExperience: number;
}

export interface CreateUserResponse {
  success: boolean;
  data: any;
}
