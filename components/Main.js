'use client'

import { useState } from 'react';
import IngredientList from './ingredientList';
import ClaudeRecipe from './ClaudeRecipe';
import { getRecipeFromChefClaude } from '../app/AI';
import Loader from './loader';

export default function Main() {

    const [ingredients, setIngredients] = useState([]);

    const [Recipe, setRecipe] = useState("");

    const [Loading, setLoader] = useState(false);


    function handleSubmit(formData) {
        const newingredient = formData.get('ingredient');
        setIngredients(prevIngredients => [...prevIngredients, newingredient])
    }

    const handleSplice = (index) => {
        const newItems = [...ingredients];
        newItems.splice(index, 1);
        setIngredients(newItems);

        if (newItems.length < 3) {
            setRecipe(""); // Clear recipe if fewer than 3 left
        }
    }

    async function getRecipe() {
        if (ingredients.length < 3) {
            setRecipe("")  // Clear old recipe if too few ingredients
            return;
        }

        setLoader(true); //Show loader
        const recipeMarkdown = await getRecipeFromChefClaude(ingredients);
        setRecipe(recipeMarkdown);
        setLoader(false); // hide loader
    }




    return (
        <main>
            <form className="flex justify-center gap-3 h-9.5" action={handleSubmit} required>
                <input type="text" placeholder="e.g Oregano" aria-label="Add ingredient" name="ingredient" className="rounded-[6px] 
                border border-gray-300 px-[13px] py-[9px] shadow-sm grow min-w-[150px] max-w-[400px]" />
                <button className="rounded-[6px] border-none bg-black white text-white w-[150px] text-sm font-medium  before:content-['+'] before:mr-[4px] cursor-pointer">Add ingredient</button>
            </form>

            {ingredients.length > 0 && <IngredientList ingredients={ingredients} showRecipe={getRecipe} removeItem={handleSplice} />}
            {Loading && <Loader />}
            {!Loading && Recipe && ingredients.length >= 3 && <ClaudeRecipe chefClaudeRecipe={Recipe} />}

        </main>


    );
}