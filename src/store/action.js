export const addName = (name) => {
  return {
    type: "ADD_USER",
    payload: name,
  };
};

export const addEmail = (email) => {
  return {
    type: "ADD_EMAIL",
    payload: email,
  };
};

export const submit = () => {
  return {
    type: "SUBMIT_USER",
  };
};


export const check = (active, id) => {
  return {
    type: "CHECK",
    active,
    id,
  };
};

export const countCheck = (sum) => {
  return {
    type: "COUNT",
    payload: sum,
  };
};

export const remove = () => {
  return {
    type: "REMOVE_USER",
  };
};
