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
      const newUserBySortId = { ...state.userById };
      const convertObjToArrId = Object.values(newUserBySortId);
      convertObjToArrId.sort((a, b) =>
        a.id > b.id ? 1 : b.id > a.id ? -1 : 0
      );
      const idAfterSortId = [];
      convertObjToArrId.map((item) => idAfterSortId.push(item.id));
      return { ...state, userIds: idAfterSortId };
    case "REVERSE_ID":
      const newUserByReverseId = { ...state.userById };
      const convertObjToArrId1 = Object.values(newUserByReverseId);
      convertObjToArrId1.sort((a, b) =>
        a.id > b.id ? 1 : b.id > a.id ? -1 : 0
      );
      const idAfterReverseId = [];
      convertObjToArrId1.map((item) => idAfterReverseId.push(item.id));
      idAfterReverseId.reverse();
      return { ...state, userIds: idAfterReverseId };
    case "SORT_NAME":
      const newUserBySortName = { ...state.userById };
      const convertObjToArrName = Object.values(newUserBySortName);
      convertObjToArrName.sort((a, b) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0
      );
      const idAfterSortName = [];
      convertObjToArrName.map((item) => idAfterSortName.push(item.id));
      return { ...state, userIds: idAfterSortName };
    case "REVERSE_NAME":
      const newUserByReverseName = { ...state.userById };
      const convertObjToArrName1 = Object.values(newUserByReverseName);
      convertObjToArrName1.sort((a, b) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0
      );
      const idAfterReverseName = [];
      convertObjToArrName1.map((item) => idAfterReverseName.push(item.id));
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
