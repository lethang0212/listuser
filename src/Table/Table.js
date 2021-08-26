import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { countCheck, remove, sortName } from "../store/action";
import { UserList } from "./UserList/UserList";

export function Table() {
  const count = useSelector((state) => state.User.count);
  const dispatch = useDispatch();
  const handleSort = () => {
    dispatch(sortName());
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
            <div className="col-10">
              {count === 0 ? "" : <h5>{count} Column's selected</h5>}
            </div>
            <div className="col-2">
              {count === 0 ? (
                <button onClick={handleSort}>
                  <i className="fa fa-sort" aria-hidden="true"></i>
                </button>
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
              <th id="INPUT">
                {/* <button className="button">
                  <i
                    className="fa fa-check"
                    aria-hidden="true"
                    style={{ color: "blue" }}
                  ></i>
                </button> */}
              </th>
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
