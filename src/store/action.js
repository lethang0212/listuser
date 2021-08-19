export const add = (name) => {
  return {
    type: "ADD_USER",
    payload: name,
  };
};

export const submit = () => {
  return {
    type: "SUBMIT_USER",
  };
};

export const sort_id = () => {
  return {
    type: "SORT_ID",
  };
};

export const reverse_id = () => {
  return {
    type: "REVERSE_ID",
  };
};

export const sort_name = () => {
  return {
    type: "SORT_NAME",
  };
};

export const reverse_name = () => {
  return {
    type: "REVERSE_NAME",
  };
};

export const remove = (id) => {
  return {
    type: "REMOVE_USER",
    payload: id,
  };
};
