import axios from "axios";
import { response } from "express";

export default function getRandomRecipes(){
    return axios.get("https://api.spoonacular.com/recipes/random?number=1&tags=vegetarian,dessert&apiKey=54cc4cb4fb0146819b9958a53e62d454")
    .then(response => response.data)
}