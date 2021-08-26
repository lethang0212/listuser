import React from "react";
import { useSelector } from "react-redux";
import { User } from "./User/User";

export function UserList() {
  const users = useSelector((state) => state.User.userIds);
  return (
    <>
      <tbody>
        {users.map((user) => (
          <tr key={user}>
            <User id={user} />
          </tr>
        ))}
      </tbody>
    </>
  );
}
