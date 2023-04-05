import React from "react";
import { Link } from "react-router-dom";

function RecipeList({ recipes }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {recipes.map((recipe) => {
        console.log(recipe.ingredients);
        return (
          <div
            key={recipe.id}
            className="border dark:bg-slate-500 dark:border-0 dark:text-white p-2 text-left rounded flex flex-col gap-2 bg-slate-100"
          >
            <h1 className="text-center font-bold text-2xl mb-3">
              {recipe.title}
            </h1>
            <p>
              <span className="font-bold">Cooking Time: </span>{" "}
              {recipe.cookingTime}
            </p>
            <div>
              <span className="font-bold">Ingredients: </span>
              {recipe.ingredients &&
                recipe.ingredients.map((ings) => {
                  return <span key={ings}>{ings}, </span>;
                })}
            </div>
            <p className="mb-auto">
              <span className="font-bold">Method: </span>{" "}
              {recipe.method.substr(0, 100)}...
            </p>
            <Link
              to={`/recipe/${recipe.id}`}
              className="dark:hover:text-black mt-5 text-center border self-center px-2 py-2 rounded hover:bg-white"
            >
              Read More
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default RecipeList;
