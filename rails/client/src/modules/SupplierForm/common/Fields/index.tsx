import React from "react";
import { useFormContext } from "react-hook-form";
import { TextField } from "@mui/material";

const Fields: React.VFC<{}> = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <TextField
        id="supplier-name"
        label="名前"
        variant="outlined"
        {...register("name")}
        error={"name" in errors}
        helperText={errors.name?.message}
      />
    </>
  );
};

export default Fields;
