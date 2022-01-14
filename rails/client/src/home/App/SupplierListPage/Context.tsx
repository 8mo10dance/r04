import React from "react";

import reducer, { State, Action } from "./reducer";

type Value = [State, React.Dispatch<Action>];

const initialState: State = { name: "ADD_SUPPLIER" };

const Context = React.createContext<Value>([initialState, undefined]);

type Props = {
  children: React.ReactNode;
};

export const Provider: React.VFC<Props> = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const useSupplierContext = (): Value => {
  const [state, dispatch] = React.useContext(Context);

  return [state, dispatch];
};
