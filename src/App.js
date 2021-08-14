import React from "react";
import { Provider } from "react-redux";
import { UserAdd } from "./applications/UserAdd/UserAdd";
import { UserList } from "./applications/UserList/UserList";
import { store } from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <UserAdd />
        <br /> <br />
        <UserList />
      </Provider>
    </>
  );
}

export default App;
