import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { reverseName, sortName } from "../../store/action";

export function ListBeforeSortName() {
  const [sumName, setSumName] = useState(0);
  const dispatch = useDispatch();
  function count(a) {
    return a + 1;
  }
  const check = () => {
    if (sumName % 2 === 0) {
      dispatch(sortName());
    } else {
      dispatch(reverseName());
    }
  };
  return (
    <>
      <th>
        <button
          id="id"
          onClick={() => {
            setSumName(count(sumName));
            check();
          }}
        >
          Name
        </button>
      </th>
    </>
  );
}
