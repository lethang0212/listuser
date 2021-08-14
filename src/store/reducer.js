import { combineReducers } from "redux";

const STATE = {
  userIds: [],
  userById: {},
};

function User(state = STATE, action) {
  switch (action.type) {
    case "ADD_USER":
      const newUserIds = [...state.userIds];
      newUserIds.push(state.userIds.length + 1);
      const newUserByIds = {};
      newUserByIds.name = action.payload;
      newUserByIds.id = state.userIds.length + 1;
      const listUser = { ...state.userById };
      listUser[state.userIds.length + 1] = newUserByIds;
      console.log(listUser);
      return { ...state, userIds: newUserIds, userById: listUser };
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
