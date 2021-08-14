import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Add } from "../../store/action";

export function UserAdd() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const handleAdd = () => {
    dispatch(Add(name));
  };
  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleAdd}>
          Submit
        </button>
      </form>
    </div>
  );
}
