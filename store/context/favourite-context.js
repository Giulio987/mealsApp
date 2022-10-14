import { createContext, useState } from "react";

export const FavouritesContex = createContext({
    ids: [],
    addFavourite: (id) => {},
    removeFavourite: (id) => {}
})

function FavouriteContextProvider({children}) {
    const [favouriteMealIds, setFavouriteMealIds] = useState([])

    const addFavourite = (id) => { 
        setFavouriteMealIds(prevState => {
            return [...prevState, id]
        })
    }
    const removeFavourite = (id) => { 
        setFavouriteMealIds(prevState => {
            return prevState.filter((mealId) => mealId !== id)
        })
    }

    const value = {
        ids: favouriteMealIds,
        addFavourite: addFavourite,
        removeFavourite: removeFavourite
    }

    return <FavouritesContex.Provider value={value}>{children}</FavouritesContex.Provider>
}

export default FavouriteContextProvider;