import React from "react";
import Header from "../Header/Header";
import { useLoaderData } from "react-router-dom";
import ChefCard from "../ChefCard/ChefCard";
import Dishes from "../Dishes/Dishes";
import About from "../About/About";

const Home = () => {
  const chefInformation = useLoaderData();
  return (
    <div>
      <Header></Header>

      {chefInformation.map((chefs) => (
        <ChefCard key={chefs.chefId} chefs={chefs}></ChefCard>
      ))}
      <Dishes></Dishes>
      <About></About>
    </div>
  );
};

export default Home;
