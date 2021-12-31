import { DefaultApiFactory } from "~/api";

import { Supplier } from "~/types/models";
import { Supplier as FormValues } from "~/types/forms";
import axios from "./base";

const suppliersApi = DefaultApiFactory(undefined, "", axios);

type GetSuppliersResponse = {
  suppliers: Supplier[];
};

export const getSuppliers = (): Promise<GetSuppliersResponse> =>
  suppliersApi
    .getSuppliers()
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));

type PostSupplierResponse = {
  supplier: Supplier;
};

export const postSupplier = (
  values: FormValues
): Promise<PostSupplierResponse> =>
  suppliersApi
    .postSupplier({ supplier: values })
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));
