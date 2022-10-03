

const useMealFects=()=>{
    const [isLoading, setIsLoading] = useState();
    const [error, setError] = useState();
    const [meals, setMeals] = useState([]);

    

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
}