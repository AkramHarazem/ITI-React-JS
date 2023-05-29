import { combineReducers } from "redux";
import { moviesReducer } from "./moviesReducer";
import { wordReducer } from "./wordReducer";

export const rootReducer = combineReducers({
    movies: moviesReducer,
    word: wordReducer
})