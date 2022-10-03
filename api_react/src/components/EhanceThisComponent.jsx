import { useEffect, useState } from "react";
import MealItem from "./MealItem";

const EhanceThisComponent = () => {
  const [meals, setMeals] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState();



  const fetchSearchResults = async (searchText) => {
    try {
      setIsLoading(true);
      //seartext es lo unico que varia en mabas funciones
      const result = await fetch(
        `]https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
      );
      const data = await result.json();
      return data;
    } catch (error) {
      setError(error);
    }finally{
      setIsLoading(false)
    }
  };

  useEffect(() => {
    const getRecipeResults = async () => {
      const results = await fetchSearchResults('chicken');
      setMeals(results?.meals);
    };
    getRecipeResults();
  }, []);
  console.log(meals);

  const HandleSearchClick = async () => {
    //evento para buscar
  const data = await fetchSearchResults(searchValue)
    setMeals(data?.meals);
  };
  return (
    <div style={{ width: "100%" }}>
      <h2>Echan this component</h2>
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <input
          type="text"
          value={searchValue}
          onChange={({ target: { value } }) => setSearchValue(value)}
          style={{ width: 260, padding: "10px", marginBottom: "10px" }}
        />
        <button
          type="button"
          style={{ marginLeft: 8 }}
          onClick={HandleSearchClick}
        >
          {" "}
          Search
        </button>
      </div>
      {isLoading && <h2>Cargando...</h2>}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {meals?.map((meal) => 
         <MealItem {...meal} key={`meal-item-${meal.strMeal}`}/>
        )}
      </div>
    </div>
  );
};

export default EhanceThisComponent;
