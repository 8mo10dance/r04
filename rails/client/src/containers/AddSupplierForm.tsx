import React from "react";

import AddSupplierForm from "~/modules/SupplierForm/AddForm";
import { postSupplier } from "~/services/suppliers";

const Container: React.VFC<{}> = () => {
  return <AddSupplierForm postSupplier={postSupplier} />;
};

export default Container;
