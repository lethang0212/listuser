import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { check, countCheck } from "../../../store/action";

export function User(props) {
  const { id } = props;
  const [sum, setSum] = useState(1);
  const userById = useSelector((state) => state.User.userById[id]);
  const dispatch = useDispatch();
  const checkCount = useSelector((state) => state.User.count);
  const count = (a) => {
    return a + 1;
  };
  const checkActive = () => {
    if (sum % 2 === 0) {
      dispatch(countCheck(checkCount - 1));
      dispatch(check(false, id));
    } else {
      dispatch(countCheck(checkCount + 1));
      dispatch(check(true, id));
    }
  };
  if (userById === undefined) return <> </>;
  else {
    return (
      <>
        <td>
          <button
            className="button"
            onClick={() => {
              setSum(count(sum));
              checkActive();
            }}
          >
            {userById.check ? (
              <i
                className="fa fa-check"
                aria-hidden="true"
                style={{ color: "blue" }}
              ></i>
            ) : (
              ""
            )}
          </button>
        </td>
        <td>{userById.id}</td>
        <td>{userById.name}</td>
        <td>{userById.email}</td>
      </>
    );
  }
}
