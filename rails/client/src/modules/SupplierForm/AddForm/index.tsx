import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Box, Button, TextField } from "@mui/material";

type FormValues = {
  name: string;
};

const schema = yup
  .object({
    name: yup.string().required("名前を入力してください"),
  })
  .required();

const AddSupplierForm: React.VFC<{}> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit((values) => console.log(values))}>
      <Box p={2}>
        <Box mb={2}>
          <TextField
            id="supplier-name"
            label="名前"
            variant="outlined"
            {...register("name")}
            error={"name" in errors}
            helperText={errors.name?.message}
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
