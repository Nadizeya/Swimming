import { baseApi } from "@/services/baseApi";
import {
  CreateUserRequest,
  CreateUserResponse,
  GetUsersParam,
  PaginatedUserResponse,
} from "./userType";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsersByRole: builder.query<PaginatedUserResponse, GetUsersParam>({
      query: ({
        page = 1,
        limit = 10,
        search = "",
        sortBy = "",
        sortOrder = "",
        roles,
      }) => {
        const params = new URLSearchParams({
          roles,
          page: page.toString(),
          limit: limit.toString(),
          search,
          sortBy,
          sortOrder,
        });

        const url = `/v2/clubs/user?${params.toString()}`;
        return url;
      },
    }),
    createUser: builder.mutation<any, FormData>({
      query: (formData) => ({
        url: "/v2/clubs/user",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const { useGetUsersByRoleQuery, useCreateUserMutation } = userApi;
