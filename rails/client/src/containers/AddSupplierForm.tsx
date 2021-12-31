import React from "react";

import AddSupplierForm from "~/modules/SupplierForm/AddForm";
import { postSupplier } from "~/api/suppliers";

const Container: React.VFC<{}> = () => {
  return <AddSupplierForm postSupplier={postSupplier} />;
};

export default Container;
