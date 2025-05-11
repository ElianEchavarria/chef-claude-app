

export default function ingredienList(props) {

    const ingredientListItem = props.ingredients.map((ingredient, index) => {
        return <li className="flex justify-between bg-gray-100 text-gray-800 px-4 py-2 rounded-md shadow-sm mb-2 hover:bg-gray-200 transition-colors" key={index}>{ingredient}
            <button className="cursor-pointer" onClick={() => props.removeItem(index)}>x</button>
        </li>
    })

    return (
        <section className="">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-6">
                Ingredients on hand:
            </h2>
            <ul className="mb-[48px] text-[#475467] leading-[28px]" aria-live="polite">
                {ingredientListItem}
            </ul>
            {props.ingredients.length > 3 && <div className="flex justify-between items-center rounded-[8px] bg-[#F0EFEB] px-[10px] py-[28px]">
                <div>
                    <h3 className="text-[1.125rem] font-medium leading-6">Ready for a Recipe?</h3>
                    <p className="text-[#6B7280] text-[0.875rem] leading-5">Generate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={props.showRecipe} className="border-0 rounded-[6px] bg-[#D17557] shadow-sm text-[#FAFAF8] px-[9px] py-[17px] font-inter text-[0.875rem] cursor-pointer">Get a recipe</button>
            </div>}
        </section>
    );
}