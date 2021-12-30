import React from "react";
import { Box, Button, TextField } from "@mui/material";

const AddSupplierForm: React.VFC<{}> = () => {
  return (
    <form>
      <Box p={2}>
        <Box mb={2}>
          <TextField id="supplier-name" label="名前" variant="outlined" />
        </Box>
        <Box>
          <Button variant="contained" color="primary">
            登録
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default AddSupplierForm;
