import React from "react";
import { useParams } from "react-router-dom";
import useCategoryFetch from "../../hooks/useCategoryfetch";
import { useCart } from "../../context/context";

const MealDetails = () => {
  const { mealcategory, mealid } = useParams();
  const { data } = useCategoryFetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
  );
  const { state, dispatch } = useCart();
  console.log("context data", state);

  const handleIncrement = () => {
    dispatch({
      type: "INCREASE_QUANTITY",
      payload: {
        id: mealid,
      },
    });
  };

  const handleDecrement = () => {
    dispatch({
      type: "DECREASE_QUANTITY",
      payload: {
        id: mealid,
      },
    });
  };

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        itemId: mealid,
        itemName: data.meals[0].strMeal,
        itemAmount: 200,
        itemQuantity: 1,
        itemImage: data.meals[0].strMealThumb,
      },
    });
  };

  return (
    <div className="px-10 py-6">
      <h1 className="font-semibold text-xl">
        {mealcategory + " / "}
        <span className="font-normal">
          {data && data.meals && data.meals[0].strMeal}
        </span>
      </h1>
      <div className="my-4 flex w-[100%] gap-6 lg:flex-row flex-col">
        <div className="border border-1 border-gray-600 lg:w-[60%] w-[100%] h-[350px]">
          <img
            src={data && data.meals && data.meals[0].strMealThumb}
            alt="meal_image"
            className="w-[100%] h-[100%]"
          />
        </div>
        <div className="lg:w-[50%] w-[100%]">
          <div className="pb-4">
            <span className="font-bold text-xl">
              {data && data.meals && data.meals[0].strMeal}
            </span>
          </div>
          <div className="pb-4">
            <p>{data && data.meals && data.meals[0].strInstructions}</p>
          </div>
          <div>
            <span className="font-bold pb-4 text-lg">₹ 100 /-</span>
          </div>
          {state.cart.length > 0 &&
          state.cart.some((e: any) => e.itemId === mealid) ? (
            <div className="flex items-center gap-3 my-4">
              <div className="cursor-pointer">
                <span
                  className="border border-1 border-gray-700 py-1 px-3 font-bold text-lg text-center"
                  onClick={handleDecrement}
                >
                  -
                </span>
              </div>
              <div className="cursor-pointer">
                <span className="border border-1 border-gray-700 py-1 px-5 font-bold text-lg text-center">
                  {state.cart.length > 0
                    ? state.cart.filter((e: any) => e.itemId === mealid)[0]
                        .itemQuantity
                    : 0}
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
          ) : (
            <div className="my-2">
              <button
                className="bg-blue-600 text-white p-2 w-[100%] rounded-md"
                onClick={addToCart}
              >
                Add to Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MealDetails;
