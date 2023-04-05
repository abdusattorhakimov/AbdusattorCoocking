import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import RecipeList from "../../components/recipeList";

function Home() {
  const [url, setUrl] = useState("http://localhost:3000/recipes");
  const { data: recipes, error, isPending } = useFetch(url);
  console.log(recipes);
  return <div className="">{recipes && <RecipeList recipes={recipes} />}</div>;
}

export default Home;
