import React from "react";
import useCategoryFetch from "../../hooks/useCategoryfetch";
import { useNavigate, useParams } from "react-router-dom";
import ItemCards from "../Cards/ItemCards";
import { useCart } from "../../context/context";
import { API } from "../../endpoints/endpoints";

const CategoryListing = () => {
  const navigate = useNavigate();
  const { itemname } = useParams();
  const { state, dispatch } = useCart();
  const { data } = useCategoryFetch(API.CATEGORIES_ITEMS(itemname));

  const handleMealClick = (mealId: string) => {
    navigate(`/mealdetails/${itemname}/${mealId}`);
  };

  const addToCart = (val: any) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        itemId: val.mealId,
        itemName: val.mealName,
        itemAmount: 200,
        itemQuantity: 1,
        itemImage: val.mealImage,
      },
    });
  };

  return (
    <div className="lg:px-10 px-4 py-6">
      <h1 className="font-semibold text-xl">{itemname}</h1>
      <div className="flex items-center gap-6 flex-wrap">
        {data &&
          data?.meals.length > 0 &&
          data.meals.map((meal: any, index: number) => (
            <ItemCards
              key={index}
              mealId={meal.idMeal}
              mealName={meal.strMeal}
              mealImage={meal.strMealThumb}
              handleMealClick={handleMealClick}
              addToCart={addToCart}
              isAddedToCart={state.cart.some(
                (e: any) => e.itemId === meal.idMeal
              )}
            />
          ))}
      </div>
    </div>
  );
};

export default CategoryListing;
