import { combineReducers } from "redux";

const USER = {
  userIds: [],
  nameUser: "",
  emailUser: "",
  userById: {},
  listUser: [],
  count: 0,
};

// const Sort = (obj, key) => {
//   const newObj = { ...obj };
//   const newArr = Object.values(newObj);
//   newArr.sort((a, b) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0));
//   const idAfterSort = [];
//   newArr.forEach((item) => idAfterSort.push(item.id));
//   return idAfterSort;
// };

function User(state = USER, action) {
  switch (action.type) {
    case "ADD_USER":
      state.nameUser = action.payload;
      return { ...state };
    case "ADD_EMAIL":
      state.emailUser = action.payload;
      return { ...state };
    case "SUBMIT_USER":
      const id = state.userIds.length + 1;
      const check = false;
      const newUserIds = [...state.userIds, id];
      const newUsersById = {
        name: state.nameUser,
        email: state.emailUser,
        id,
        check,
      };
      state.listUser.push(newUsersById);
      return {
        ...state,
        userIds: newUserIds,
        userById: { ...state.userById, [id]: newUsersById },
      };
    case "SORT":
      const newObj = { ...state.userById };
      const newArr = Object.values(newObj);
      const key = action.payload;
      newArr.sort((a, b) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0));
      const idAfterSort = [];
      newArr.forEach((item) => idAfterSort.push(item.id));
      return { ...state, userIds: idAfterSort };
    case "CHECK":
      const newCheck = action.active;
      const newId = action.id;
      const newListUserByCheck = [...state.listUser];
      newListUserByCheck[newId - 1].check = newCheck;
      return {
        ...state,
        userById: {
          ...state.userById,
          [newId]: { ...state.userById[newId], check: newCheck },
        },
        listUser: newListUserByCheck,
      };
    case "COUNT":
      return {
        ...state,
        count: action.payload,
      };
    case "REMOVE_USER":
      const idByRemove = [];
      const len = state.listUser.length;
      for (let i = 0; i < len; i++) {
        if (state.listUser[i].check === true) {
          idByRemove.push(state.listUser[i].id);
        }
      }
      for (let i = 0; i < idByRemove.length; i++) {
        delete state.userById[idByRemove[i]];
      }
      const idByClone = [...state.userIds];
      const newIdByRemove = idByClone.filter(
        (item) => !idByRemove.includes(item)
      );
      return { ...state, userIds: newIdByRemove };
    default:
      return state;
  }
}

export const reducer = combineReducers({
  User,
});
