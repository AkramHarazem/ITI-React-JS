import React, { createContext } from "react";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {v4 as uuid} from 'uuid';

export const context = createContext();
const Context = ({ children }) => {
  console.log(children);
  const navigate = useNavigate();
  const [movies, setMovies] = useState(null);
  const [filteredArr, setFillteredArr] = useState(movies);

  // Get Data
  const getData = () => {
    axios.get("http://localhost:3005/movies").then((res) => {
      setMovies(res.data);
    });
  // console.log("get");
  };
  useEffect(() => {
    return getData();
  }, []);
  
  // update Movie
  const updateData = (id, updatedData) => {
    axios.patch(`http://localhost:3005/movies/${id}`, { ...updatedData })
      .then((res) => {
        const UpdatedMovie = res.data;
        setMovies((prevMovies) => {
          const updatedMovies = prevMovies.map((movie) => {
            if (+movie.id === +id) {
              return UpdatedMovie;
            }
            return movie;
          });
          return updatedMovies;
        });
        navigate("/movies");
      });
  // console.log("update");
  };

  // add movie
  const addData = (newData) => {
    axios.post("http://localhost:3005/movies", { ...newData });
    // setMovies([...movies, {...newData,id:uuid()}]);
    // setMovies([...movies,{...newData,id:Math.floor(Math.random()*748746)}]);
    setMovies([...movies,newData]);
    // axios.get("http://localhost:3005/movies").then((res) => {
    //   setMovies(res.data);
    // });
    navigate("/movies");
  // console.log("add");
  };

  // Delete Movie
  const DeleteFun = (movieID) => {
      setMovies(movies.filter((m) => (m.id).toString() !== movieID.toString()));
      axios.delete(`http://localhost:3005/movies/${movieID}`);
      navigate("/movies");
  console.log("delete");
    }

  //  SEARCH
  const [word, setWord] = useState("");

  // useEffect(() => {
  //   setFillteredArr(
  //     movies?.filter((m) => m.title.toLowerCase().includes(word.toLowerCase()))
  //   );
  // }, [word, movies]);

  return (
    <context.Provider
      value={{ filteredArr, DeleteFun, movies, word, addData, updateData }}
    >
      {children}
    </context.Provider>
  );
};

export default Context;
