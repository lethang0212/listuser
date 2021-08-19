import React from "react";
import { useDispatch } from "react-redux";
import { reverse_id, sort_id } from "../../store/action";

export function ListBeforeSortId() {
  const dispatch = useDispatch();
  const handleSortId = () => {
    dispatch(sort_id());
  };
  const handleReverseId = () => {
    dispatch(reverse_id());
  };
  return (
    <>
      <th>
        <button onClick={handleSortId}>sort id</button>
        <button onClick={handleReverseId}>reverse id</button>
      </th>
    </>
  );
}
