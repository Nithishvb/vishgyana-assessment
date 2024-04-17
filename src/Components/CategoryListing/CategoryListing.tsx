import React from "react";
import useCategoryFetch from "../../hooks/useCategoryfetch";
import { useNavigate, useParams } from "react-router-dom";
import ItemCards from "../Cards/ItemCards";

const CategoryListing = () => {

  const navigate = useNavigate();
  const { itemname } = useParams();
  const { data } = useCategoryFetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${itemname}`
  );
  
  const handleMealClick = (mealId: string) => {
    navigate(`/mealdetails/${itemname}/${mealId}`);
  }

  return (
    <div className="px-10 py-6">
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
            />
          ))}
      </div>
    </div>
  );
};

export default CategoryListing;
