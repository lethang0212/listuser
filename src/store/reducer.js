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
      const useNameFromArr = [];
      const arrAfterSort = [];
      convertObjToArr.map((item) => useNameFromArr.push(item.name));
      for (let i = 0; i < convertObjToArr.length; i++) {
        const f = useNameFromArr.sort()[i];
        for (let j = 0; j < useNameFromArr.length; j++) {
          if (f === convertObjToArr[j].name) {
            arrAfterSort.push(convertObjToArr[j]);
          }
        }
      }
      const idAfterSortName = [];
      arrAfterSort.map((item) => idAfterSortName.push(item.id));
      return { ...state, userIds: idAfterSortName };
    case "REVERSE_NAME":
      const newUserByReverse = { ...state.userById };
      const convertObjToArr1 = Object.values(newUserByReverse);
      const useNameFromArr1 = [];
      const arrAfterReverse = [];
      convertObjToArr1.map((item) => useNameFromArr1.push(item.name));
      for (let i = 0; i < convertObjToArr1.length; i++) {
        const f1 = useNameFromArr1.sort()[i];
        for (let j = 0; j < useNameFromArr1.length; j++) {
          if (f1 === convertObjToArr1[j].name) {
            arrAfterReverse.push(convertObjToArr1[j]);
          }
        }
      }
      const idAfterReverseName = [];
      arrAfterReverse.map((item) => idAfterReverseName.push(item.id));
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
