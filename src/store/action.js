
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

export const sortId = () => {
  return {
    type: "SORT_ID",
  };
};

export const reverseId = () => {
  return {
    type: "REVERSE_ID",
  };
};

export const sortName = () => {
  return {
    type: "SORT_NAME",
  };
};

export const reverseName = () => {
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
