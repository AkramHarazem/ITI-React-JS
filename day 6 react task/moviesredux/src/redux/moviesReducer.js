import { ADD_MOVIE, DELETE_MOVIE, GET_MOVIES, UPDATE_MOVIE } from "./actionType";

const movies = null;

export const moviesReducer = (state = movies, { type, payload }) => {
  switch (type) {
    case GET_MOVIES:
      return payload;
    case DELETE_MOVIE:
      return state.filter((m) => +m.id !== +payload);
    case UPDATE_MOVIE:
      return state.map((movie) => {
        if (+movie.id === +payload.id) {
          return payload.updatedMovie;
        }
        return movie;
      });
    case ADD_MOVIE:
        return [...state,payload]    
    default:
      return state;
  }
};
