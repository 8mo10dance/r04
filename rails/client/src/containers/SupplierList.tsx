import React from "react";

import SupplierList from "~/modules/SupplierList";
import { getSuppliers } from "~/api/suppliers";

const Container: React.VFC<{}> = () => {
  return <SupplierList getSuppliers={getSuppliers} />;
};

export default Container;
