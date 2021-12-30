import React from "react";
import { CssBaseline, Box, Paper } from "@mui/material";

import SupplierList from "~/modules/SupplierList";

const App: React.VFC<{}> = () => {
  return (
    <>
      <CssBaseline />
      <Box p={2}>
        <Paper>
          <SupplierList />
        </Paper>
      </Box>
    </>
  );
};

export default App;
