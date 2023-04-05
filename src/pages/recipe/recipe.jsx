import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

function Recipe() {
  const { id } = useParams();
  const url = "http://localhost:3000/recipes/" + id;
  const { data: recipe, error, isPending } = useFetch(url);
  return (
    <div className="h-screen ">
      {recipe && (
        <div
          key={recipe.id}
          className="border p-2 text-left rounded flex flex-col gap-2 bg-slate-100"
        >
          <h1 className="text-center font-bold text-2xl mb-3">
            {recipe.title}
          </h1>
          <p>
            <span className="font-bold">Cooking Time: </span>
            {recipe.cookingTime}
          </p>
          <div>
            <span className="font-bold">Ingredients: </span>
            {/* {recipe.ingredients.map((ing) => {
              return <span key={ing}>{ing}, </span>;
            })} */}
          </div>
          <p className="mb-auto">
            <span className="font-bold">Method: </span>
            {recipe.method}
          </p>
        </div>
      )}
    </div>
  );
}

export default Recipe;
