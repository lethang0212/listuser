export const Add = (name) => {
  return {
    type: "ADD_USER",
    payload: name,
  };
};

export const Remove = (id) => {
  return {
    type: "REMOVE_USER",
    payload: id,
  };
};
