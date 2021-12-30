import React from "react";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

import { Supplier } from "./types";
import { getSuppliers } from "./api";

const SupplierList: React.VFC<{}> = () => {
  const [suppliers, setSuppliers] = React.useState<Supplier[]>([]);
  const [isFetching, setIsFetching] = React.useState(false);

  const fetchSuppliers = async () => {
    try {
      const response = await getSuppliers();
      setSuppliers(response.data.suppliers);
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

export default SupplierList;
