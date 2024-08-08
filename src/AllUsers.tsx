import React from "react";

interface User {
  id: string;
  name: string;
}

interface UsersData {
  data: User[];
}

export const AllUsers: React.FC<UsersData> = ({ data }) => {
  return (
    <div>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.name} (ID: {user.id})
          </li>
        ))}
      </ul>
    </div>
  );
};
