import React from "react";
import {
  CssBaseline,
  Button,
  Box,
  Paper,
  Dialog,
  DialogTitle,
} from "@mui/material";

import SupplierList from "~/modules/SupplierList";
import AddSupplierForm from "~/modules/SupplierForm/AddForm";

const App: React.VFC<{}> = () => {
  const [isOpening, setIsOpening] = React.useState(false);

  return (
    <>
      <CssBaseline />
      <Box p={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setIsOpening(true)}
        >
          登録
        </Button>
        <Paper>
          <SupplierList />
        </Paper>
        <Dialog open={isOpening} onClose={() => setIsOpening(false)}>
          <DialogTitle>発注先登録</DialogTitle>
          <AddSupplierForm />
        </Dialog>
      </Box>
    </>
  );
};

export default App;
