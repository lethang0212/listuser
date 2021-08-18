export const add = (name) => {
  return {
    type: "ADD_USER",
    payload: name,
  };
};

export const submit = () => {
  return {
    type: "SUBMIT_USER",
  }
}

export const remove = (id) => {
  return {
    type: "REMOVE_USER",
    payload: id,
  };
};
