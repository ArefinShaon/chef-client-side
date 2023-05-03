import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import Rating from "react-rating";
import swal from "sweetalert";
import RecipeHeader from "../RecipeHeader/RecipeHeader";

const Recipes = () => {
  const recipe = useLoaderData();
  const {
    recipes,
  } = recipe;

  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(true);
    swal("Success", "Added to favorites", "success");
  };

  return (
    <div>
      <RecipeHeader recipe={recipe}></RecipeHeader>
      <div className="lg:m-14 mb-12 ">
        <ul className="lg:flex justify-between">
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <div className="card w-full lg:w-96 h-full mx-auto bg-base-200 shadow-xl mt-6">
                <div className="card-body">
                  <h2 className="card-title text-pink-600">{recipe.name}</h2>
                  <p className="mt-6">
                    <span className="text-pink-600 font-bold">
                      Ingredients
                    </span>
                    : {recipe.ingredients}.
                  </p>
                  <p className="mt-6">
                    <span className="text-pink-600 font-bold">
                      How to cook
                    </span>
                    : {recipe.cookingMethod}
                  </p>
                  <div className="card-actions justify-end">
                    <p className="text-pink-600 ">
                      <span className="font-bold">Ratings</span>:
                      <Rating
                        className=" ps-6"
                        placeholderRating={recipe.rating}
                        readonly
                        emptySymbol={<FontAwesomeIcon icon={faStarHalf} />}
                        placeholderSymbol={<FontAwesomeIcon icon={faStar} />}
                        fullSymbol={<FontAwesomeIcon icon={faStar} />}
                      ></Rating>{" "}
                      {recipe.rating}{" "}
                    </p>
                    <button
                      className="btn bg-pink-600 mt-6"
                      onClick={handleFavoriteClick}
                      disabled={isFavorite}
                    >
                      {isFavorite ? "Favorited" : "Favorite"}
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Recipes;
