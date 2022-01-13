import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Box, Button, TextField } from "@mui/material";

import { Supplier } from "../types/models";
import { Supplier as FormValues } from "../types/forms";
import { useAddSupplierFormDialog } from "../AddSupplierFormDialog";
import * as SupplierApi from "../SupplierApi";

const schema = yup
  .object({
    name: yup.string().required("名前を入力してください"),
  })
  .required();

const AddSupplierForm: React.VFC<{}> = () => {
  const [_, setOpen] = useAddSupplierFormDialog();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const createSupplier = async (values: FormValues) => {
    try {
      await SupplierApi.postSupplier(values);
      setOpen(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form onSubmit={handleSubmit(createSupplier)}>
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
