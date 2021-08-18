import { combineReducers } from "redux";

const STATE = {
  userIds: [],
  nameUser: "",
  userById: {},
};

function User(state = STATE, action) {
  switch (action.type) {
    case "ADD_USER":
      state.nameUser = action.payload;
      return { ...state };
    case "SUBMIT_USER":
      const id = state.userIds.length + 1;
      const newUserIds = [...state.userIds, id];
      const newUsersById = {
        name: state.nameUser,
        id,
      };
      return {
        ...state.userById,
        userIds: newUserIds,
        userById: { ...state.userById, [id]: newUsersById },
      };
    case "REMOVE_USER":
      delete state.userById[action.payload];
      return { ...state };
    default:
      return state;
  }
}

export const reducer = combineReducers({
  User,
});
