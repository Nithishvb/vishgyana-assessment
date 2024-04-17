import React from "react";
import CategoryCard from "../Cards/CategoryCard";
import useCategoryFetch from "../../hooks/useCategoryfetch";
import { useNavigate } from "react-router-dom";

const Categories = () => {

   const navigate = useNavigate();

  const { data } = useCategoryFetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  
  const handleCategoryClick = (categoryNname: string) => {
    navigate(`/category/${categoryNname}`);
  }

  return (
    <div className="px-10 py-5">
      <div>
        <span className="font-semibold text-xl">Categories</span>
      </div>
      <div className="flex items-center gap-6 flex-wrap">
        {data &&
          data?.categories.length > 0 &&
          data?.categories.map((val: any, i: number) => (
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
