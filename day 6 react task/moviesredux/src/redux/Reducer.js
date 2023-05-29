import { ADD_MOVIE, DELETE_MOVIE, GET_MOVIES, SEARCH_MOVIE, UPDATE_MOVIE } from "./actionType";

const initial = {
  movies: [],
  word:""
};
export const Reducer = (state = initial, { type, payload }) => {
  const {movies} = state
  switch (type) {
    case GET_MOVIES:
      return {...state,movies:payload};
    case DELETE_MOVIE:
      return {...state,movies:movies.filter((m) => +m.id !== +payload)};
    case UPDATE_MOVIE:
      return {...state,movies:movies.map((movie) => {
        if (+movie.id === +payload.id) {
          return payload.updatedMovie
        }
        return movie;
      })};      
    case ADD_MOVIE:
        return {...state,movies:[...movies,payload]}; 
    case SEARCH_MOVIE:
          return {...state,word:payload}   
    default:
      return state;
  }
};