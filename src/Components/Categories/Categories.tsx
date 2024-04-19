import React from "react";
import CategoryCard from "../Cards/CategoryCard";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/context";

const Categories = () => {
  const navigate = useNavigate();
  const { state } = useCart();

  const handleCategoryClick = async (categoryName: string) => {
    navigate(`/category/${categoryName}`);
  };

  return (
    <div className="lg:px-10 px-4 py-5">
      <div>
        <span className="font-semibold text-xl">Categories</span>
      </div>
      <div className="flex items-center gap-6 flex-wrap">
        {state &&
          state?.categories.length > 0 &&
          state?.categories.map((val: any, i: number) => (
            <CategoryCard
              key={i}
              categoryImage={val.strCategoryThumb}
              categoryName={val.strCategory}
              handleCategoryClick={handleCategoryClick}
            />
          ))}
      </div>
    </div>
  );
};

export default Categories;
