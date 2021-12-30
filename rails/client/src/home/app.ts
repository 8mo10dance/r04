import axios, { AxiosPromise } from "axios";

type GetSuppliersResponse = {
  suppliers: Supplier[];
};

type Supplier = {
  name: string;
};

export const getSuppliers = (): AxiosPromise<GetSuppliersResponse> =>
  axios({
    method: "GET",
    url: "/api/v1/suppliers",
  });
