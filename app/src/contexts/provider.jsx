import React, { useReducer } from "react";
import Context from "./context";

const Provider = ({ children }) => {
  return <Context.Provider>{children}</Context.Provider>;
};

export default Provider;