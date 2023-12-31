import React from "react";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import ComponentA from "./Components/ComponentA";

function App() {
  return (
    <Provider store={store}>
      <ComponentA />
    </Provider>
  );
}

export default App;
