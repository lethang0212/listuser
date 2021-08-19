import React from "react";
import { useDispatch } from "react-redux";
import { reverse_name, sort_name } from "../../store/action";

export function ListBeforeSortName() {
  const dispatch = useDispatch();
  const handleSort = () => {
    dispatch(sort_name());
  };
  const handleReverse = () => {
    dispatch(reverse_name());
  };
  return (
    <>
      <th>
        <button onClick={handleSort}>sort name</button>
        <button onClick={handleReverse}>reverse name</button>
      </th>
    </>
  );
}
