import React from 'react';
import { UserList } from './UserList/UserList';

export function Table() {
    return <>
        <table className="table table-bordered">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <UserList/>
      </table>
    </>
}