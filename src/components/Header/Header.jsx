import React from "react";
import img from "../../../public/header.png"
const Header = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row lg:gap-32">
          <img 
            src={img}
            className=" rounded-lg lg:mr-24 "
          />
          <div>
            <h1 className="lg:text-5xl text-2xl font-bold">BD Chefs</h1>
            <div className="py-4">
                          <span className="text-xl">We cook, We Care</span>
                          <br />
                         <p className=" py-6"> <span className="lg:text-7xl text-4xl text-pink-600 font-bold">BD Chefs</span></p>
                          <br />
                          <span className="text-2xl">যত দূরেই থাক, মায়ের হাতের স্বাদ</span>
                          
            </div>
            <button className="btn bg-pink-600">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
