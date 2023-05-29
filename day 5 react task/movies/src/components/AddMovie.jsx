import React, { memo, useContext, useState } from "react";
import { TextField, Button } from "@mui/material";
import Box from "@mui/material/Box";
import { TextareaAutosize } from "@mui/material";
import { styled } from "@mui/system";
import axios, { Axios } from "axios";
import { context } from "../context/Context";
import { useNavigate } from "react-router-dom";
import SimpleBackdrop from "./spinner";
import Swal from "sweetalert2";


const blue = {
  100: "#DAECFF",
  200: "#b6daff",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const StyledTextarea = styled(TextareaAutosize)(
  ({ theme }) => `
    width: 400px;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 3px;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    background: ${theme.palette.mode === "dark" ? grey[900] :  "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${
      theme.palette.mode === "dark" ? grey[900] : grey[50]
    };
  
    &:hover {
      border-color: ${theme.palette.mode === "dark" ? "#fff" :  grey[900]};
    }
  
    &:focus {
      border-color: ${blue[500]};
      box-shadow: 0 0 0 0px ${
      theme.palette.mode === "dark" ? "white" : blue[200]
    };
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `
);

// Add Movie component
const AddMovie = () => {
const {addData} = useContext(context)
  const [newMovie, setNewMovie] = useState({
    id: "",
    title: "",
    release_date: "",
    vote_average: "",
    vote_count: "",
    overview: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Swal.fire({
      title: "Are you sure to add this movie?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Yes",
      denyButtonText: "Cancel",
      customClass: {
        actions: "my-actions",
        cancelButton: "order-1 right-gap",
        confirmButton: "order-2",
        denyButton: "order-3",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Added!", "", "success");
        addData(newMovie)
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  if (!newMovie) return <SimpleBackdrop></SimpleBackdrop>;
  return (
    <form onSubmit={handleSubmit}
     className="w-100"
     >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          p:2
        }}
      >
        <TextField
          onChange={handleChange}
          name="id"
          value={newMovie.id}
          sx={{ width: "100%" }}
          label="id"
        />
        <TextField
          onChange={handleChange}
          name="title"
          value={newMovie.title}
          label="Title"
        />
        <TextField
          onChange={handleChange}
          name="release_date"
          value={newMovie.release_date}
          label="release date"
        />
        <TextField
          onChange={handleChange}
          name="vote_average"
          value={newMovie.vote_average}
          label="vote average"
        />
        <TextField
          onChange={handleChange}
          name="vote_count"
          value={newMovie.vote_count}
          label="vote count"
        />
        <TextField
          onChange={handleChange}
          name="poster_path"
          value={newMovie.poster_path}
          label="poster_path"
        />
        <StyledTextarea
          onChange={handleChange}
          maxRows={4}
          name="overview"
          sx={{ width: "100%" }}
          value={newMovie.overview}
          aria-label="over view"
          placeholder="Overview"
        />

        <Button variant="contained" color="primary" type="submit">
          ADD
        </Button>
      </Box>
    </form>
    
  );
};

export default memo(AddMovie);







  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   axios.post("http://localhost:3005/movies", {
  //     id: newMovie.id,
  //     title: newMovie.title,
  //     release_date: newMovie.release_date,
  //     vote_average: newMovie.vote_average,
  //     vote_count: newMovie.vote_count,
  //     overview: newMovie.overview,
  //     //    poster_path:newMovie.poster_path || "https://i.ibb.co/KFsG4JF/w-DWwtvk-RRlg-Ti-Ur6-Ty-LSMX8-FCu-Z.jpg"
  //     poster_path:
  //       newMovie.poster_path && newMovie.poster_path !== ""
  //         ? newMovie.poster_path
  //         : "https://i.ibb.co/KFsG4JF/w-DWwtvk-RRlg-Ti-Ur6-Ty-LSMX8-FCu-Z.jpg",
  //   });
  //   //   navigate("/")
  //   window.location.assign("/");
  // };