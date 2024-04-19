export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item: any) => item.id !== action.payload.id),
      };
    case "INCREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item: any) =>
          item.itemId === action.payload.id
            ? { ...item, itemQuantity: item.itemQuantity + 1 }
            : item
        ),
      };
    case "DECREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart
          .map((item: any) =>
            item.itemId === action.payload.id
              ? {
                  ...item,
                  itemQuantity:
                    item.itemQuantity > 0 ? item.itemQuantity - 1 : 0,
                }
              : item
          )
          .filter((item: any) => item.itemQuantity > 0),
      };
    case "ADD_TO_ORDERS":
      return {
        ...state,
        orders: [...state.orders, action.payload],
        cart: [],
      };
    case "SET_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};
