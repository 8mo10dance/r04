import * as ActionType from "./ActionType";

export const goToProductList = (supplierId: number) => ({
  type: ActionType.GO_TO_PRODUCT_LIST as typeof ActionType.GO_TO_PRODUCT_LIST,
  payload: { supplierId },
});
