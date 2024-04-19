import React from "react";
import { useCart } from "../../context/context";

const PlaceOrder = () => {
  const { state } = useCart();
  console.log("Order context", state);

  return (
    <div className="lg:px-10 px-4 py-5">
      <div className="py-2">
        <span className="font-bold">Summary</span>
      </div>
      {state.orders.map((e: any, index: number) => (
        <div
          className="border border-1 border-gray-600 lg:w-[60%] w-[100%] p-2 my-6"
          key={index}
        >
          <div className="flex items-center justify-between">
            <p>Order Id: {"#" + Object.keys(e)[0]}</p>
            <p>Total: ₹ {e.totalAmount} /-</p>
          </div>
          <div className="py-2">
            <span className="font-bold">Items</span>
          </div>
          <div className="bg-gray-100 p-2">
            {e[Object.keys(e)[0]].map((a: any, index: number) => (
              <div
                className="flex justify-between  m-2 py-2 border-b-2 border-gray-300"
                key={index}
              >
                <div className="flex items-center">
                  <div>
                    <img
                      src={a.itemImage}
                      alt="orderImage"
                      className="lg:w-[70px] lg:h-[70px] w-[50px] h-[50px]"
                    />
                  </div>
                  <div className="px-4">
                    <p className="lg:text-lg text-[12px]">{a.itemName}</p>
                    <span className="lg:text-lg text-[12px]">₹ 100 /-</span>
                  </div>
                </div>
                <div className="flex items-end">
                  <span className="lg:text-lg text-[13px]">
                    {a.itemQuantity} x 100 = {a.itemQuantity * 100}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlaceOrder;
