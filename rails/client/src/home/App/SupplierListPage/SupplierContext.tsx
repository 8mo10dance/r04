import React from "react";

import { Supplier } from "./types/models";

type Value = [Supplier[], (suppliers: Supplier[]) => void];

const Context = React.createContext<Value>([
  [],
  (suppliers: Supplier[]) => {
    throw new Error("not implemented");
  },
]);

type Props = {
  children: React.ReactNode;
};

export const SupplierProvider: React.VFC<Props> = ({ children }) => {
  const [suppliers, setSuppliers] = React.useState<Supplier[]>([]);

  return (
    <Context.Provider value={[suppliers, setSuppliers]}>
      {children}
    </Context.Provider>
  );
};

export const useSupplierContext = (): Value => {
  const [suppliers, setSuppliers] = React.useContext(Context);

  return [suppliers, setSuppliers];
};
