import React from "react";
import { useCart } from "../../context/context";
import { useNavigate } from "react-router-dom";

const CartSummary = () => {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();

  const placeOrder = () => {
    dispatch({
      type: 'ADD_TO_ORDERS',
      payload: {
        [generateOrderNumber()]: state.cart,
        totalAmount: state.cart.reduce(
          (total: number, item: any) => total + item.itemQuantity * 100,
          0
        )
      }
    });
    navigate('/placeorder');
  };

  const generateOrderNumber = () => {
    return Math.floor(Math.random() * 900) + 100;
  }

  return (
    <div>
      <div className="border border-1 border-gray-600">
        <div className="py-2 px-3">
          <span className="font-bold">Summary</span>
        </div>
        {state.cart.map((e: any,index: number) => (
          <div className="px-3 flex items-center justify-between mb-2" key={index}>
            <p className="lg:text-[17px] text-[12px]">{e.itemName}</p>
            <span className="lg:text-[17px] text-[12px]">
              {e.itemQuantity} x 100 = {e.itemQuantity * 100}
            </span>
          </div>
        ))}
        <div className="px-3 text-right py-3">
          <span className="lg:text-[17px] text-[12px]">
            Total ={" "}
            {state.cart.length > 0
              ? state.cart.reduce(
                  (total: number, item: any) => total + item.itemQuantity * 100,
                  0
                )
              : 0}{" "}
            /-
          </span>
        </div>
      </div>
      <div className="w-[100%] my-4">
        <button
          className="bg-violet-600 text-white px-2 py-2 w-[100%] rounded-md"
          onClick={placeOrder}
        >
          Place order
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
