import React from "react";
import { CssBaseline, Button, Box, Paper } from "@mui/material";

import SupplierList from "~/modules/SupplierList";

const App: React.VFC<{}> = () => {
  return (
    <>
      <CssBaseline />
      <Box p={2}>
        <Button variant="contained" color="primary">
          登録
        </Button>
        <Paper>
          <SupplierList />
        </Paper>
      </Box>
    </>
  );
};

export default App;
