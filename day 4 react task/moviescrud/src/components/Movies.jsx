import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import SimpleBackdrop from "./Spinner";
import OneMovie from "./OneMovie";


const Movies = ({word}) => {
  console.log(word)
  const [movies, setMovies] = useState(null);
  const [filteredArr,setFillteredArr]=useState(movies);

  useEffect(()=>{
      setFillteredArr(movies?.filter((m)=> m.title.toLowerCase().includes(word.toLowerCase())));
  },[word,movies])

  

  useEffect(() => {
    axios.get("http://localhost:3000/movies").then((res) => {
      console.log(res.data);
      setMovies(res.data);
      console.log(movies);
    });
  },[]);


  const DeleteFun = useCallback ((movieID) => {
    setMovies(movies.filter((m) => m.id !== movieID));
    axios.delete(`http://localhost:3000/movies/${movieID}`)
  },[movies]);

  if (!filteredArr) return <SimpleBackdrop></SimpleBackdrop>;
  return (
    <>
      {filteredArr.map((movie) => (
        <OneMovie key={movie.id} props={movie} DeleteFun={DeleteFun}></OneMovie>
      ))}
    </>
  );
};

export default Movies;
