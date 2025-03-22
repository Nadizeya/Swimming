import React from "react";
import UserList from "./features/user/UserList";

const App = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">My App</h1>
      <UserList />
    </div>
  );
};

export default App;
