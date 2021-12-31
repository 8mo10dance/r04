import { Supplier as FormValues } from "~/types/forms";
import { apiRequest } from "./base";

export const getSuppliers = () =>
  apiRequest
    .getSuppliers()
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));

export const postSupplier = (values: FormValues) =>
  apiRequest
    .postSupplier({ supplier: values })
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));
