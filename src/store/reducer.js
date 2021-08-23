import { combineReducers } from "redux";

const STATE = {
  userIds: [],
  nameUser: "",
  userById: {},
};

const Sort = (obj, key) => {
  const newObj = { ...obj };
  const newArr = Object.values(newObj);
  newArr.sort((a, b) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0));
  const idAfterSort = [];
  newArr.forEach((item) => idAfterSort.push(item.id));
  return idAfterSort;
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
    case "SORT_ID":
      const newIdBySort = Sort(state.userById, "id");
      return { ...state, userIds: newIdBySort };
    case "REVERSE_ID":
      const newIdbyReverse = Sort(state.userById, "id").reverse();
      return { ...state, userIds: newIdbyReverse };
    case "SORT_NAME":
      const newNamebySort = Sort(state.userById, "name");
      return { ...state, userIds: newNamebySort };
    case "REVERSE_NAME":
      const newNamebyReverse = Sort(state.userById, "name").reverse();
      return { ...state, userIds: newNamebyReverse };
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
