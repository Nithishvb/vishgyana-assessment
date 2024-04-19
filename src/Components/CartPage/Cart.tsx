import React from "react";
import CartItems from "./CartItems";
import CartSummary from "./CartSummary";
import { useCart } from "../../context/context";

const Cart = () => {
  const { state, dispatch } = useCart();

  const handleIncrement = (mealId: string) => {
    dispatch({
      type: "INCREASE_QUANTITY",
      payload: {
        id: mealId,
      },
    });
  };

  const handleDecrement = (mealId: string) => {
    dispatch({
      type: "DECREASE_QUANTITY",
      payload: {
        id: mealId,
      },
    });
  };

  if(state && state.cart.length === 0){
    return (
      <div className="flex items-center justify-center h-[80vh]">
        <h2 className="lg:text-2xl font-medium text-center p-[6px] text-[20px]">Your cart is currently empty. Start adding items to your cart to see them here!</h2>
      </div>
    )
  }

  return (
    <div className="px-10 py-6">
      <div>
        <h1 className="font-semibold text-xl">Cart Items</h1>
      </div>
      <div className="flex w-[100%] lg:flex-row	 flex-col">
        <div className="lg:w-[70%] w-[100%]">
          {state.cart.length > 0 &&
            state.cart.map((e: any, index: number) => (
              <CartItems
                key={index}
                mealId={e.itemId}
                mealName={e.itemName}
                mealImage={e.itemImage}
                mealQuantity={e.itemQuantity}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
              />
            ))}
        </div>
        <div className="lg:w-[30%] w-[100%] px-4 mt-4">
          <CartSummary />
        </div>
      </div>
    </div>
  );
};

export default Cart;
