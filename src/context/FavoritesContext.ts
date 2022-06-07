import { createContext } from "react";
import Food from "../models/food-models";

interface FavoritesContextModel {
  favorite: Food[];
  addFavorite: (food: Food) => void;
  removeFavorite: (id: string) => void;
}

const defaultValues: FavoritesContextModel = {
  favorite: [],
  addFavorite: () => {},
  removeFavorite: () => {},
};

const FavoritesContext = createContext(defaultValues);

export default FavoritesContext;
