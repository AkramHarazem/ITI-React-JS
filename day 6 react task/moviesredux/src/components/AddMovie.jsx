import React, { memo, useState } from "react";
import { TextField, Button } from "@mui/material";
import Box from "@mui/material/Box";
import { TextareaAutosize } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import SimpleBackdrop from "./spinner";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { addMovie } from "../redux/actionCreator";

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

// Add Movie component
const AddMovie = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [newMovie, setNewMovie] = useState({
    id: "",
    title: "",
    release_date: "",
    vote_average: "",
    poster_path: "",
    vote_count: "",
    overview: "",
  });

  const handleImageUpload = (e) => {
    console.log(e.target.files);
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onloadend = () => {
      setNewMovie({ ...newMovie, poster_path: fileReader.result });
    };
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(newMovie)
    const validations = {};
    if (!/^\d{6}$/.test(newMovie.id)) {
      validations.id = "ID should contain only six numbers.";
    }
    if (newMovie.title.trim() === "") {
      validations.title = "Title is required";
    }
    if (!/^\d{4}-\d{2}-\d{2}$/.test(newMovie.release_date)) {
      validations.release_date = "Release date should be in YYYY-MM-DD format.";
    }
    if (newMovie.vote_average.trim() === "") {
      validations.vote_average = "Vote average is required";
    } else {
      const voteAvg = parseFloat(newMovie.vote_average);
      if (isNaN(voteAvg) || voteAvg > 10 || voteAvg < 0) {
        validations.vote_average =
          "Vote average should be a number between 0 and 10.";
      }
    }
    if (!/^\d+$/.test(newMovie.vote_count)) {
      validations.vote_count = "Vote Count should contain only numbers.";
    }
    // if (newMovie.overview.trim() === '') {
    //   validations.overview = "Overview is required"
    // }

    if (Object.keys(validations).length > 0) {
      setErrors(validations);
    } else {
      setErrors({});

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
          dispatch(addMovie(newMovie));
          navigate("/movies");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    }
  };

  if (!newMovie) return <SimpleBackdrop></SimpleBackdrop>;
  return (
    <form onSubmit={handleSubmit} className="w-100">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          p: 2,
        }}
      >
        <TextField
          onChange={handleChange}
          name="id"
          value={newMovie.id}
          sx={{ width: "100%" }}
          label="id"
          error={!!errors.id}
          helperText={errors.id}
        />
        <TextField
          onChange={handleChange}
          name="title"
          value={newMovie.title}
          label="Title"
          error={!!errors.title}
          helperText={errors.title}
        />
        <TextField
          onChange={handleChange}
          name="release_date"
          value={newMovie.release_date}
          label="release date"
          error={!!errors.release_date}
          helperText={errors.release_date}
        />
        <TextField
          onChange={handleChange}
          name="vote_average"
          value={newMovie.vote_average}
          label="vote average"
          error={!!errors.vote_average}
          helperText={errors.vote_average}
        />
        <TextField
          onChange={handleChange}
          name="vote_count"
          value={newMovie.vote_count}
          label="vote count"
          error={!!errors.vote_count}
          helperText={errors.vote_count}
        />
        <StyledTextarea
          onChange={handleChange}
          maxRows={4}
          name="overview"
          sx={{ width: "100%" }}
          value={newMovie.overview}
          aria-label="over view"
          placeholder="Overview"
          // error={!!errors.overview}
          // helperText={errors.overview}
        />
        {/* <TextField
          onChange={handleChange}
          name="poster_path"
          value={newMovie.poster_path}
          label="poster_path"
          error={!!errors.vote_count}
          helperText={errors.vote_count}
        /> */}
        <input
          accept="image/*"
          style={{ display: "none" }}
          id="raised-button-file"
          multiple
          type="file"
          onChange={handleImageUpload}
        />
        <label
          htmlFor="raised-button-file"
          style={{ display: "flex", alignItems: "center" }}
        >
          Movie Poster:
          <Button
            variant="contained"
            component="span"
            sx={{
              width: "60%",
              marginLeft: "auto",
              backgroundColor: "gray",
              "&:hover": {
                backgroundColor: "darkgray",
              },
            }}
          >
            Upload
          </Button>
        </label>

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
