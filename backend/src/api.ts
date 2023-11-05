import {OpenAI} from "openai";
import * as dotenv from 'dotenv'
require('dotenv').config()

const apikey = process.env.API_KEY;

if (!apikey) {
    throw new Error('API key not found');
}

const ai = new OpenAI({apiKey: apikey});


export const apiCall = async(searchPrompt: string):Promise<string> => {


    const completion = await ai.completions.create({
        model: "gpt-3.5-turbo-instruct",
        prompt: searchPrompt,
        max_tokens: 50,
        temperature: 0
    });
    console.log(searchPrompt)
    console.log(completion)

    return completion.choices[0].text.trim();
};