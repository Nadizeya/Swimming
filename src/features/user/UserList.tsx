import { useGetUsersQuery } from "./userApi";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setSelectedUser } from "./userSlice";

const UserList = () => {
  const dispatch = useAppDispatch();
  const { data: users, isLoading, isError } = useGetUsersQuery();
  const selectedUser = useAppSelector((state) => state.user.selectedUser);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Failed to load users.</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Users</h2>
      <ul className="space-y-2">
        {users?.map((user) => (
          <li
            key={user.id}
            onClick={() => dispatch(setSelectedUser(user))}
            className={`p-2 border rounded cursor-pointer ${
              selectedUser?.id === user.id ? "bg-blue-100" : ""
            }`}
          >
            {user.name} — {user.email}
          </li>
        ))}
      </ul>

      {selectedUser && (
        <div className="mt-4 p-4 bg-gray-100 border rounded">
          <h3 className="font-semibold">Selected User:</h3>
          <p>{selectedUser.name}</p>
          <p>{selectedUser.email}</p>
        </div>
      )}
    </div>
  );
};

export default UserList;
