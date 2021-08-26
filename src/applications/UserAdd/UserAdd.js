import React from "react";
import { useDispatch } from "react-redux";
import { submit } from "../../store/action";
import { UserInput } from "./UserInput/UserInput";

export function UserAdd() {
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(submit());
  };
  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="name">
            <b>TableListUser</b>
          </label>
          <UserInput />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
