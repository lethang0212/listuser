import React from "react";
import { useDispatch } from "react-redux";
import { addEmail, addName } from "../../../store/action";

export function UserInput() {
  const dispatch = useDispatch();
  return (
    <>
      <input
        type="text"
        className="form-control"
        placeholder="Enter name"
        onChange={(e) => dispatch(addName(e.target.value))}
      />
      <input
        type="text"
        className="form-control"
        placeholder="Enter email"
        onChange={(e) => dispatch(addEmail(e.target.value))}
      />
    </>
  );
}
