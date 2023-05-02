import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Recipes = () => {
    const recipe = useLoaderData();
    const { chefName, chefPicture, yearsOfExperience, numberOfRecipes, likes ,chefId } = recipe;
    return (
        <div>
            <h3>{chefName}</h3>
        </div>
    );
};

export default Recipes;