import React from "react";
import { useForm } from "react-hook-form";
import { Box, Button, TextField } from "@mui/material";

type FormValues = {
  name: string;
};

const AddSupplierForm: React.VFC<{}> = () => {
  const { register, handleSubmit } = useForm<FormValues>();

  return (
    <form onSubmit={handleSubmit((values) => console.log(values))}>
      <Box p={2}>
        <Box mb={2}>
          <TextField
            id="supplier-name"
            label="名前"
            variant="outlined"
            {...register("name")}
          />
        </Box>
        <Box>
          <Button variant="contained" color="primary" type="submit">
            登録
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default AddSupplierForm;
