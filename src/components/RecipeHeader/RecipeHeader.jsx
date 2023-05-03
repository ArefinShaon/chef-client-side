import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
const RecipeHeader = ({ recipe }) => {
  const {
    chefName,
    chefPicture,
    yearsOfExperience,
    numberOfRecipes,
    likes,
    bio,
  } = recipe;
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chefPicture}
            className="lg:w-3/6  w-full rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-4xl text-pink-600 font-bold">{chefName}</h1>
            <p className="py-6">{bio}</p>
            <div>
              <div className="text-xl mb-6 ">
                <p className="text-slate-500 btn btn-outline hover:bg-pink-600 mr-2">Experience for {yearsOfExperience} years</p>
                <p className="text-slate-500 btn btn-outline hover:bg-pink-600"> Number of recipes: {numberOfRecipes}</p>
              </div>
              <p className="text-pink-600 font-bold">Likes : {likes}  <FontAwesomeIcon icon={faThumbsUp} /></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeHeader;
