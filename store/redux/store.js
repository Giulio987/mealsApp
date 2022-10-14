import {configureStore} from '@reduxjs/toolkit';
import favouriteReducer from './reducers/favourites';

const store = configureStore({
    reducer: {favouriteMeals: favouriteReducer}
});

export default store;