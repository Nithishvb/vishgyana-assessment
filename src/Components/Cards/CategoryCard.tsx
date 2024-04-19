import React from "react";

type CategoryCardPropType = {
  categoryImage: string;
  categoryName: string;
  handleCategoryClick: (id: string) => void;
};

const CategoryCard = ({
  categoryImage,
  categoryName,
  handleCategoryClick
}: CategoryCardPropType) => {
  return (
    <div className="w-[100%] h-[10%] lg:w-[220px] lg:h-[160px] border border-1 border-gray-600 mt-4 cursor-pointer" onClick={()=>handleCategoryClick(categoryName)}>
      <div className="border-b-2 border-gray-500 h-[80%] flex justify-center items-center">
        <img src={categoryImage} alt="categories_image" className="h-[100%] w-[100%]" />
      </div>
      <div className="h-[20%] pl-2 pt-1">
        <span>{categoryName}</span>
      </div>
    </div>
  );
};

export default CategoryCard;
