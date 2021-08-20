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
    case "SORT_ID":
      const idAfterSortId = [...state.userIds].sort();
      return { ...state, userIds: idAfterSortId };
    case "REVERSE_ID":
      const idAfterReverseId = [...state.userIds].sort().reverse();
      return { ...state, userIds: idAfterReverseId };
    case "SORT_NAME":
      const newUserBySort = { ...state.userById };
      const convertObjToArr = Object.values(newUserBySort);
      convertObjToArr.sort((a, b) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0
      );
      const idAfterSortName = [];
      convertObjToArr.map((item) => idAfterSortName.push(item.id));
      return { ...state, userIds: idAfterSortName };
    case "REVERSE_NAME":
      const newUserByReverse = { ...state.userById };
      const convertObjToArr1 = Object.values(newUserByReverse);
      convertObjToArr1.sort((a, b) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0
      );
      const idAfterReverseName = [];
      convertObjToArr1.map((item) => idAfterReverseName.push(item.id));
      idAfterReverseName.reverse();
      return { ...state, userIds: idAfterReverseName };
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
