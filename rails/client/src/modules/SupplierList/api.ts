import axios, { AxiosPromise } from "axios";

import { Supplier } from "./types";

type GetSuppliersResponse = {
  suppliers: Supplier[];
};

export const getSuppliers = (): AxiosPromise<GetSuppliersResponse> =>
  axios({
    method: "GET",
    url: "/api/v1/suppliers",
  });
