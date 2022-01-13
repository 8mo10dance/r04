import React from "react";
import { Button, Box, Paper, Dialog, DialogTitle } from "@mui/material";

import {
  AddSupplierFormDialogProvider,
  useAddSupplierFormDialog,
} from "./AddSupplierFormDialog";
import SupplierList from "./SupplierList";
import AddSupplierForm from "./AddSupplierForm";

const SupplierListPage: React.VFC<{}> = () => {
  const [open, setOpen] = useAddSupplierFormDialog();

  return (
    <Box p={2}>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        登録
      </Button>
      <Paper>
        <SupplierList />
      </Paper>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>発注先登録</DialogTitle>
        <AddSupplierForm />
      </Dialog>
    </Box>
  );
};

export default () => (
  <AddSupplierFormDialogProvider>
    <SupplierListPage />
  </AddSupplierFormDialogProvider>
);
