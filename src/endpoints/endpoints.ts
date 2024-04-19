export const API = {
    CATEGORIES: () => "https://www.themealdb.com/api/json/v1/1/categories.php",
    CATEGORIES_ITEMS: (itemname?: string) => `https://www.themealdb.com/api/json/v1/1/filter.php?c=${itemname}`,
    MEAL_DETAILS: (mealid?: string) => `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
}