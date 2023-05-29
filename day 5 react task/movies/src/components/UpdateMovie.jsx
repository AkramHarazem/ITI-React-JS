import React, { memo, useContext, useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import Box from "@mui/material/Box";
import { TextareaAutosize } from "@mui/material";
import { styled } from "@mui/system";
import axios, { Axios } from "axios";
import { context } from "../context/Context";
import { useNavigate, useParams } from "react-router-dom";
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
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${
      theme.palette.mode === "dark" ? grey[900] : grey[50]
    };
  
    &:hover {
      border-color: ${theme.palette.mode === "dark" ? "#fff" : grey[900]};
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

const UpdateMovie = () => {
  const { movies,updateData } = useContext(context);
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const selectedMovie = movies.find((m) => (m.id).toString() === id);
    setMovie(selectedMovie);
  }, [movies, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure to update this movie?",
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
        Swal.fire("Updated!", "", "success");
        updateData(id,movie)
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  if (!movie) return <SimpleBackdrop></SimpleBackdrop>;
  return (
    <form onSubmit={handleSubmit}
    className="w-100"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          p: 2
        }}
      >
        {/* <TextField
          onChange={handleChange}
          name="id"
          value={movie.id}
          sx={{ width: "400px" }}
          label="id"
        /> */}
        <TextField
          onChange={handleChange}
          name="title"
          sx={{ width: "100%" }}
          value={movie.title}
          label="Title"
        />
        <TextField
          onChange={handleChange}
          name="release_date"
          value={movie.release_date}
          label="release date"
        />
        <TextField
          onChange={handleChange}
          name="vote_average"
          value={movie.vote_average}
          label="vote average"
        />
        <TextField
          onChange={handleChange}
          name="vote_count"
          value={movie.vote_count}
          label="vote count"
        />
        <TextField
          onChange={handleChange}
          name="poster_path"
          value={movie.poster_path}
          label="poster_path"
        />
        <StyledTextarea
          onChange={handleChange}
          maxRows={3}
          name="overview"
          sx={{ width: "100%" }}
          value={movie.overview}
          aria-label="over view"
          placeholder="Maximum 4 rows"
        />

        <Button variant="contained" color="primary" type="submit">
          Update
        </Button>
      </Box>
    </form>
  );
};

export default memo(UpdateMovie);











  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios.put(`http://localhost:3005/movies/${id}`, {
  //     ...movie,
  //     id: movie.id,
  //     title: movie.title,
  //     release_date: movie.release_date,
  //     vote_average: movie.vote_average,
  //     vote_count: movie.vote_count,
  //     overview: movie.overview,
  //     //    poster_path:movie.poster_path || "https://i.ibb.co/KFsG4JF/w-DWwtvk-RRlg-Ti-Ur6-Ty-LSMX8-FCu-Z.jpg"
  //     poster_path:
  //       movie.poster_path && movie.poster_path !== ""
  //         ? movie.poster_path
  //         : "https://i.ibb.co/KFsG4JF/w-DWwtvk-RRlg-Ti-Ur6-Ty-LSMX8-FCu-Z.jpg",
  //   });
  //   // navigate("/")
  //   window.location.assign("/");
  // };
