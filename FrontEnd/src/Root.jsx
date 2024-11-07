import React, { createContext } from "react";
import "./Root.css";
import ExampleComponent from "./components/ExampleComponent";

export const AppContext = createContext(null);

const Root = () => {
  return (
    <AppContext.Provider
      value={{
        backend_url: "http://localhost:8000",
      }}
    >
      <h1>Root Component</h1>
      <ExampleComponent />
    </AppContext.Provider>
  );
};

export default Root;
