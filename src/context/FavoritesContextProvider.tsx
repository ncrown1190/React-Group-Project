import { ReactNode, useState } from "react";
import Food from "../models/food-models";
import FavoritesContext from "./FavoritesContext";

interface Props {
    children: ReactNode;
}

const FavoritesContextProvider = (
    {children}: Props ) => {
        const [favorite, setFavorite] = useState<Food[]>([]);

        function addFavorite (food: Food):void {
        let copiedFavorite = [...favorite];
        copiedFavorite.push(food);
        setFavorite(copiedFavorite);
};
    function removeFavorite(id: string): void {
        const index: number = favorite.findIndex(
            (item) => item.id === id);
            let copiedFavorite = [...favorite];
            copiedFavorite.splice(index, 1);
            setFavorite(copiedFavorite);
    };
    return(
        <FavoritesContext.Provider value={{favorite, addFavorite, removeFavorite}}>
            {children}
        </FavoritesContext.Provider>
    );
}

