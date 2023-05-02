import React from "react";
import img from "../../../public/2023-02-03-63dc944145236.png";
const AboutInfo = () => {
  return (
    <div>
      <div className="card w-3/4 lg:h-96 mx-auto bg-base-200 shadow-xl image-full m-12">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl font-bold text-pink-500">
            About Us
          </h2>
          <p>
            We know how much your food and your family are considerable matters
            for you. Spacially when you are in a busy city with a busy schedule,
            in a corporate office, or a bachelor Hostel. BD Chefs aims to
            provide the healthiest testy food from the Chefs in the quickest
            amount of time possible to you and your family. We are a community
            of chefs all around the city and committed to delivering the
            healthiest foods to your home. We specialize in preparing the
            healthiest testy foods that we possibly can cook for our belongers.
            BDChefs.com / BD Chefs is a homemade food delivery service that is
            committed to providing the healthiest foods to people. Chefs are
            always ready to prepare the food in their kitchen and deliver it to
            the customers who want Tasty, homemade cuisine on their doorstep. We
            use the best possible fresh ingredients to cook amazing meals and we
            go by the best hygienic way to deliver the food to you. If you're
            looking for delicious and also healthy foods, then BD Chefs is the
            place that you've been searching for.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
