import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const ChefCard = ({ chefs }) => {
  const { chefName, chefPicture, yearsOfExperience, numberOfRecipes, likes } =
    chefs;
  return (
    <div>
      <div className="card lg:w-9/12 w-full bg-base-200 shadow-xl mx-auto mt-12 lg:pt-2 mb-12">
        <figure className="px-10 pt-10">
          <img src={chefPicture} alt="Shoes" className="rounded-xl p-2" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-pink-600 font-bold lg:text-3xl text-xl">
            <span>Chef Name : </span>
            {chefName}
          </h2>
          <div className="lg:flex items-center  ">
            <h2 className="text-xl m-4 text-slate-500 btn btn-outline hover:bg-pink-600">
              {" "}
              Experience for : {yearsOfExperience} years
            </h2>
            <p className="text-xl m-4 text-slate-500 btn btn-outline hover:bg-pink-600">
              Number of recipes : {numberOfRecipes}
            </p>
                  </div>
                  <div className="mt-6 mb-6">
                      <p className="text-xl font-bold">Likes from our customers : <span className="text-pink-600"> { likes} Likes</span></p>
                  </div>
          <div >
          <Link className=" btn bg-pink-600" to='/recipe'>View Recipes <span className="ms-2">
                <FontAwesomeIcon icon={faArrowRight} />
              </span></Link>
              
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
