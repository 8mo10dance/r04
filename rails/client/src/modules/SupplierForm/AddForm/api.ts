import axios, { AxiosPromise } from "axios";

import { FormValues } from "./";
import { Supplier } from "./types";

type PostSupplierResponse = {
  supplier: Supplier;
};

const fetchToken = () =>
  Array.from(document.getElementsByTagName("meta")).find(
    (e) => e.name === "csrf-token"
  ).content;

export const postSupplier = (
  values: FormValues
): AxiosPromise<PostSupplierResponse> =>
  axios({
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "X-CSRF-Token": fetchToken(),
    },
    url: "/api/v1/suppliers",
    data: {
      supplier: values,
    },
  });
