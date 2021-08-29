import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { countCheck, remove } from "../store/action";
import { UserList } from "./UserList/UserList";

export function Table() {
  const count = useSelector((state) => state.User.count);
  const dispatch = useDispatch();
  const handleSortId = () => {
    dispatch({ type: "SORT", payload: "id" });
  };
  const handleSortName = () => {
    dispatch({ type: "SORT", payload: "name" });
  };
  const handleSortEmail = () => {
    dispatch({ type: "SORT", payload: "email" });
  };
  const handleRemove = () => {
    dispatch(remove());
    dispatch(countCheck(0));
  };
  return (
    <>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-8">
              {count === 0 ? "" : <h5>{count} Column's selected</h5>}
            </div>
            <div className="col-4">
              {count === 0 ? (
                <div>
                  <button onClick={handleSortId}>SortId</button>
                  <button onClick={handleSortName}>SortName</button>
                  <button onClick={handleSortEmail}>SortEmail</button>
                </div>
              ) : (
                <button onClick={handleRemove}>
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
              )}
            </div>
          </div>
        </div>
        <table className="table table-bordered">
          <thead>
            <tr id="tr">
              <th id="INPUT"></th>
              <th id="ID">Id</th>
              <th id="NAME">Name</th>
              <th id="EMAIL">Email</th>
            </tr>
          </thead>
          <UserList />
        </table>
      </div>
    </>
  );
}
