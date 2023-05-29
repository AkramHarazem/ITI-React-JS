import axios from "axios";

export const getMoviesAPI =()=> axios.get("http://localhost:3006/movies");
export const deleteMovieAPI = (movieID)=> axios.delete(`http://localhost:3006/movies/${movieID}`);
export const updateMovieAPI = (movieID,updatedMovie)=> axios.patch(`http://localhost:3006/movies/${movieID}`,{...updatedMovie});
export const addMovieAPI = (newMovie)=> axios.post("http://localhost:3006/movies",newMovie)
