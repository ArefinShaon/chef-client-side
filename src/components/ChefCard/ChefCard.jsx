import React from "react";

const ChefCard = ({ chefs }) => {
  const { chefName, chefPicture, yearsOfExperience, numberOfRecipes, likes } =
    chefs;
  return (
    <div>
      <div className="card w-9/12 bg-base-200 shadow-xl mx-auto mt-12 lg:pt-2 mb-12">
        <figure className="px-10 pt-10">
          <img
            src={chefPicture}
            alt="Shoes"
            className="rounded-xl p-2"
          />
        </figure>
        <div className="card-body items-center text-center">
                  <h2 className="card-title text-pink-600 font-bold lg:text-3xl text-xl"><span>Chef Name : </span>{chefName}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button className="btn bg-pink-600">View Recipes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
