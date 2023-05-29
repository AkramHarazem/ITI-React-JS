import {addMovieAPI,deleteMovieAPI,getMoviesAPI,updateMovieAPI} from "../API/moviesAPI";
import {ADD_MOVIE,DELETE_MOVIE,GET_MOVIES,SEARCH_MOVIE,UPDATE_MOVIE} from "./actionType";

export const getMovies = () => (dispatch) => {
  getMoviesAPI().then((res) => {
    dispatch({
      type: GET_MOVIES,
      payload: res.data,
    });
  });
};

export const deleteMovie = (id) => (dispatch) => {
  deleteMovieAPI(id);
  dispatch({
    type: DELETE_MOVIE,
    payload: id,
  });
};

export const updateMovie = (id, updatedMovie) => (dispatch) => {
  updateMovieAPI(id, updatedMovie).then((res) => {
    dispatch({
      type: UPDATE_MOVIE,
      payload: {
        id: id,
        updatedMovie: res.data,
      },
    });
  });
};

export const addMovie = (newMovie) => (dispatch) => {
  addMovieAPI(newMovie);
  dispatch({
    type: ADD_MOVIE,
    payload: newMovie,
  });
};

export const searchMovie = (word)=>({
    type:SEARCH_MOVIE,
    payload: word
})
