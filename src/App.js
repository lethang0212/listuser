import React from "react";
import { Provider } from "react-redux";
import { UserAdd } from "./applications/UserAdd/UserAdd";
import { store } from "./store";
import { Table } from "./Table/Table";

function App() {
  return (
    <>
      <Provider store={store}>
        <UserAdd />
        <br /> <br />
        <Table />
      </Provider>
    </>
  );
}

export default App;
