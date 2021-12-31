import api from "~/api";
import { Supplier } from "~/types/models";
import { Supplier as FormValues } from "~/types/forms";

type GetSuppliersResponse = {
  suppliers: Supplier[];
};

export const getSuppliers = (): Promise<GetSuppliersResponse> =>
  api
    .get("/api/v1/suppliers")
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));

type PostSupplierResponse = {
  supplier: Supplier;
};

export const postSupplier = (
  values: FormValues
): Promise<PostSupplierResponse> =>
  api
    .post("/api/v1/suppliers", { supplier: values })
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));
