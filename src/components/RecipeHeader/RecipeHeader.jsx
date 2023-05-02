import React from "react";

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
              <div>
                <p>Experience for {yearsOfExperience} years</p>
                <p> Number of recipes {numberOfRecipes}</p>
              </div>
              <p className="text-pink-600">Likes : {likes}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeHeader;
