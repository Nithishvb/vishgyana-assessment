import React from "react";
import { useCart } from "../../context/context";

type CartItemsPropType = {
  mealId: string;
  mealName: string;
  mealImage: string;
  mealQuantity: number;
  handleIncrement: (id: string) => void;
  handleDecrement: (id: string) => void;
};

const CartItems = ({
  mealId,
  mealImage,
  mealName,
  mealQuantity,
  handleIncrement,
  handleDecrement,
}: CartItemsPropType) => {
  return (
    <div className="p-2 border border-1 border-gray-500 flex items-center justify-between px-4 my-4">
      <div className="flex items-center">
        <div className="">
          <img src={mealImage} alt="cart_image" className="lg:w-[70px] lg:h-[70px] w-[50px] h-[50px]" />
        </div>
        <div className="px-4">
          <p className="font-normal lg:text-lg text-[8px]">{mealName}</p>
          <span className="font-bold lg:text-lg text-[8px]">₹ 100 /-</span>
        </div>
      </div>
      <div className="flex">
        <div className="flex items-center gap-3 my-4">
          <div className="cursor-pointer">
            <span
              className="border border-1 border-gray-700 lg:py-1 lg:px-3 py-[1px] px-[10px] font-bold text-lg text-center"
              onClick={() => handleDecrement(mealId)}
            >
              -
            </span>
          </div>
          <div className="cursor-pointer">
            <span className="border border-1 border-gray-700 lg:py-1 lg:px-5 py-[1px] px-[10px] font-bold text-lg text-center">
              {mealQuantity}
            </span>
          </div>
          <div className="cursor-pointer">
            <span
              className="border border-1 border-gray-700 lg:py-1 lg:px-3 py-[1px] px-[10px] font-bold text-lg text-center"
              onClick={() => handleIncrement(mealId)}
            >
              +
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
