import React from "react";

type Value = [boolean, (open: boolean) => void];

const Context = React.createContext<Value>([
  false,
  (open: boolean) => {
    throw new Error("not implemented");
  },
]);

type Props = {
  children: React.ReactNode;
};

export const AddSupplierFormDialogProvider: React.VFC<Props> = ({
  children,
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Context.Provider value={[open, setOpen]}>{children}</Context.Provider>
  );
};

export const useAddSupplierFormDialog = (): Value => {
  const [open, setOpen] = React.useContext(Context);

  return [open, setOpen];
};
