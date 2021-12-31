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

export const getSupplier = (id: number) =>
  apiRequest
    .getSupplier(id)
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));

export const patchSupplier = (id: number, values: FormValues) =>
  apiRequest
    .patchSupplier(id, { supplier: values })
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));

export const deleteSupplier = (id: number) => apiRequest.deleteSupplier(id);
