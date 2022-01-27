import * as ActionType from "./ActionType";
import * as actions from "./actions";

type StateName = "ADD_SUPPLIER" | "PRODUCT_LIST";

export type State = {
  name: StateName;
  supplierId?: number;
};

export type Action = ReturnType<typeof actions.goToProductList>;

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.GO_TO_PRODUCT_LIST:
      return {
        ...state,
        name: "PRODUCT_LIST",
        supplierId: action.payload.supplierId,
      };
    default:
      return state;
  }
};

export default reducer;
