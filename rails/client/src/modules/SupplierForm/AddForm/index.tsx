import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Box, Button } from "@mui/material";

import { postSupplier } from "./api";
import Fields from "../common/Fields";

export type FormValues = {
  name: string;
};

const schema = yup
  .object({
    name: yup.string().required("名前を入力してください"),
  })
  .required();

const AddSupplierForm: React.VFC<{}> = () => {
  const methods = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const createSupplier = async (values: FormValues) => {
    try {
      await postSupplier(values);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(createSupplier)}>
        <Box p={2}>
          <Box mb={2}>
            <Fields />
          </Box>
          <Box>
            <Button variant="contained" color="primary" type="submit">
              登録
            </Button>
          </Box>
        </Box>
      </form>
    </FormProvider>
  );
};

export default AddSupplierForm;
