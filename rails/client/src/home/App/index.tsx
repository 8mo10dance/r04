import React from "react";
import { CssBaseline } from "@mui/material";

import SupplierListPage from "./SupplierListPage";

const App: React.VFC<{}> = () => {
  return (
    <>
      <CssBaseline />
      <SupplierListPage />
    </>
  );
};

export default App;
