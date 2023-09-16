import { combineReducers } from "redux";
import favoritesReducer from "./favoriteSlice/slice";

export const reducer = combineReducers({
    favorites: favoritesReducer,
});