import React from "react";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

import { useSupplierContext } from "../SupplierContext";
import { Supplier } from "../types/models";
import * as SupplierApi from "../SupplierApi";

const _SupplierList: React.VFC<{}> = () => {
  const [suppliers, setSuppliers] = useSupplierContext();

  const [isFetching, setIsFetching] = React.useState(false);
  const fetchSuppliers = async () => {
    try {
      const response = await SupplierApi.getSuppliers();
      setSuppliers(response.suppliers);
      setIsFetching(true);
    } catch (e) {
      setIsFetching(true);
      console.log(e);
    }
  };

  React.useEffect(() => {
    fetchSuppliers();
  }, []);

  return (
    <List>
      {suppliers.map((supplier, index) => (
        <ListItem key={index} disablePadding>
          <ListItemButton>
            <ListItemText primary={supplier.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default _SupplierList;
