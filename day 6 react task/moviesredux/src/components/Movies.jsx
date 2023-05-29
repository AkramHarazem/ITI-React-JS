import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import SimpleBackdrop from './spinner';
import { useSelector } from 'react-redux';


const Movies = () => {
    const movies = useSelector((state)=>state.movies)
    const word = useSelector((state)=>state.word)
    const [filterData,setFilterData] = useState(movies)
    // console.log (movies)
   
    useEffect(()=>{
      setFilterData(movies?.filter((m)=>m.title.toLowerCase().includes(word.toLowerCase())));
    },[movies,word])


    if(!filterData) return <SimpleBackdrop></SimpleBackdrop>
        return (
          <>
              {filterData.map((movie) => (
              <Movie key={movie.id} props={movie} ></Movie>
            ))}
          </>
    );
};

export default Movies;