import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../../store/action";

export function User(props) {
  const { id } = props;
  const userById = useSelector((state) => state.User.userById[id]);
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(remove(id));
  };
  if (userById === undefined) return <> </>;
  else {
    return (
      <>
        <td>{userById.id}</td>
        <td>{userById.name}</td>
        <td>
          <button onClick={() => handleRemove(id)}>Delete</button>
        </td>
      </>
    );
  }
}
