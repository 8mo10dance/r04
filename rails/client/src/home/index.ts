import { getSuppliers } from "~/home/app";

const main = async () => {
  try {
    const response = await getSuppliers();
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};

main();
