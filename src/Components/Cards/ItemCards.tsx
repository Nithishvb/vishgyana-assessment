import React from "react";

type ItemCardPropType = {
  mealId: string;
  mealName: string;
  mealImage: string;
  handleMealClick: (id: string) => void;
};

const ItemCards = ({ mealId, mealName, mealImage , handleMealClick }: ItemCardPropType) => {
  return (
    <div className="my-4 border border-1 border-gray-600 w-[180px] ">
      <div className="h-[110px] border-b-2 border-gray-600 cursor-pointer" onClick={() => handleMealClick(mealId)}>
        <img src={mealImage} alt="itemImage" className="w-[100%] h-[100%]" />
      </div>
      <div className="p-2">
        <div className="p-2">
          <p className="truncate">{mealName}</p>
          <p className="font-semibold">₹ 100 /-</p>
        </div>
        <div>
          <button className="bg-blue-600 text-white p-2 w-[100%] rounded-md">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCards;
