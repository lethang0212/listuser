import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../../../store/action";

export function UserInput() {
  const dispatch = useDispatch();
  return (
    <>
      <input
        type="text"
        className="form-control"
        placeholder="Enter name"
        onChange={(e) => dispatch(add(e.target.value))}
      />
    </>
  );
}
