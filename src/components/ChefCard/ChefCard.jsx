import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight,faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";


const ChefCard = ({ chefs }) => {
  const { chefName, chefPicture, yearsOfExperience, numberOfRecipes, likes ,chefId} =
    chefs;
  return (
    <div>
      <div className="card lg:w-9/12 w-full bg-base-200 shadow-xl mx-auto mt-12 lg:pt-2 mb-12">
        <figure className="px-10 pt-10">
          <LazyLoad offsetTop={200}><img src={chefPicture} alt="" className="rounded-xl p-2" /></LazyLoad>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-pink-600 font-bold lg:text-3xl text-xl">
            <span>Chef Name : </span>
            {chefName}
          </h2>
          <div className="lg:flex items-center  ">
            <h2 className="lg:text-xl m-4 text-slate-500 btn btn-outline hover:bg-pink-600">
              {" "}
              Experience for : {yearsOfExperience} years
            </h2>
            <p className="lg:text-xl m-4 text-slate-500 btn btn-outline hover:bg-pink-600">
              Number of recipes : {numberOfRecipes}
            </p>
                  </div>
                  <div className="mt-6 mb-6">
                      <p className="lg:text-xl font-bold">Likes from our customers : <span className="text-pink-600"> { likes} Likes <FontAwesomeIcon icon={faThumbsUp} /></span></p>
                  </div>
          <div >
          <Link className=" btn bg-pink-600" to={`/recipe/${chefId}`}>View Recipes <span className="ms-2">
                <FontAwesomeIcon icon={faArrowRight} />
              </span></Link>
              
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
