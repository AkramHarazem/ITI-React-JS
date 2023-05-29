import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import MovieDetails from './MovieDetails';
import UpdateMovie from './UpdateMovie';
import NotFound from './NotFound';
import AddMovie from './AddMovie';
import Context, { context } from '../context/Context';
import Movie from './Movie';
import SimpleBackdrop from './spinner';

// import SimpleBackdrop from "./Spinner";



const Movies = () => {
    const {movies,word} = useContext(context)
    // recWord(movies)
  
    if(!movies) return <SimpleBackdrop></SimpleBackdrop>
        return (
          <>
              {movies.map((movie) => (
              <Movie key={movie.id} props={movie} ></Movie>
            ))}
          </>
    );
};

export default Movies;