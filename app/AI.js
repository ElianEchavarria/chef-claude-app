'use server';

import Anthropic from '@anthropic-ai/sdk';


const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. 
You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try 
not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`;


const anthropic = new Anthropic({
    apikey: process.env.ANTHROPIC_API_KEY,
    dangerouslyAllowBrowser: true,
})


export async function getRecipeFromChefClaude(ingredientArr) {
    const ingredientsString = ingredientArr.join(", ");

    const msg = await anthropic.messages.create({
        model: "claude-3-7-sonnet-20250219",
        max_tokens: 20000,
        temperature: 1,
        system: SYSTEM_PROMPT,
        messages: [
            {
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text": `${ingredientsString}`
                    }
                ]
            }
        ]
    });
    return msg.content.at(-1).text;
}