import React, { useState } from "react";
import { useCart } from "../../context/context";

type ItemCardPropType = {
  mealId: string;
  mealName: string;
  mealImage: string;
  handleMealClick: (id: string) => void;
  addToCart: (val: any) => void;
  isAddedToCart: boolean;
};
type CartButtonPropType = {
  mealId: string;
  mealName: string;
  mealImage: string;
};

const ItemCards = ({
  mealId,
  mealName,
  mealImage,
  handleMealClick,
  addToCart,
  isAddedToCart,
}: ItemCardPropType) => {
  return (
    <div className="my-4 border border-1 border-gray-600 lg:w-[180px] w-[100%]">
      <div
        className="lg:h-[110px] h-[135px] border-b-2 border-gray-600 cursor-pointer"
        onClick={() => handleMealClick(mealId)}
      >
        <img src={mealImage} alt="itemImage" className="w-[100%] h-[100%]" />
      </div>
      <div className="p-2">
        <div className="p-2">
          <p className="truncate">{mealName}</p>
          <p className="font-semibold">₹ 100 /-</p>
        </div>
        <div>
          {!isAddedToCart ? (
            <button
              className="bg-blue-600 text-white p-2 w-[100%] rounded-md"
              onClick={() =>
                addToCart({
                  mealId,
                  mealName,
                  mealImage,
                })
              }
            >
              Add to Cart
            </button>
          ) : (
            <CartButtons
              mealId={mealId}
              mealName={mealName}
              mealImage={mealImage}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export function CartButtons({
  mealId,
  mealName,
  mealImage,
}: CartButtonPropType) {
  const { state, dispatch } = useCart();

  const handleIncrement = () => {
    dispatch({
      type: "INCREASE_QUANTITY",
      payload: {
        id: mealId,
      },
    });
  };

  const handleDecrement = () => {
    dispatch({
      type: "DECREASE_QUANTITY",
      payload: {
        id: mealId,
      },
    });
  };

  return (
    <div className="flex items-center gap-2 justify-center p-1">
      <div className="cursor-pointer">
        <span
          className="border border-1 border-gray-700 py-1 px-3 font-bold text-lg text-center"
          onClick={handleDecrement}
        >
          -
        </span>
      </div>
      <div className="cursor-pointer">
        <span className="border border-1 border-gray-700 py-1 px-6 font-bold text-lg text-center">
          {state.cart.length > 0 &&
            state.cart.filter((e: any) => e.itemId === mealId)[0].itemQuantity}
        </span>
      </div>
      <div className="cursor-pointer">
        <span
          className="border border-1 border-gray-700 py-1 px-3 font-bold text-lg text-center"
          onClick={handleIncrement}
        >
          +
        </span>
      </div>
    </div>
  );
}

export default ItemCards;
