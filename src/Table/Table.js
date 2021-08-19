import React from "react";
import { UserList } from "./UserList/UserList";
import { ListBeforeSortId } from "./ListBeforeSortId/ListBeforeSortId";
import { ListBeforeSortName } from "./ListBeforeSortName/ListBeforeSortName";

export function Table() {
  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <ListBeforeSortId />
            <ListBeforeSortName />
            <th>Action</th>
          </tr>
        </thead>
        <UserList />
      </table>
    </>
  );
}
