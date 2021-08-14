import React from "react";
import { useSelector } from "react-redux";
import { User } from "./User/User";

export function UserList() {
  const users = useSelector((state) => state.User.userIds);
  console.log("helo");
  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user}>
              <User id={user} />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
