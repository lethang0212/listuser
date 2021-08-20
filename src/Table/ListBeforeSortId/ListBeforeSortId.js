import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { reverseId, sortId } from "../../store/action";

export function ListBeforeSortId() {
  const [sumId, setSumId] = useState(1);
  const dispatch = useDispatch();
  function count(a) {
    return a + 1;
  }
  const check = () => {
    if (sumId % 2 === 0) {
      dispatch(sortId());
    } else {
      dispatch(reverseId());
    }
  };
  return (
    <>
      <th>
        <button
          id="id"
          onClick={() => {
            setSumId(count(sumId));
            check();
          }}
        >
          Id
        </button>
      </th>
    </>
  );
}
