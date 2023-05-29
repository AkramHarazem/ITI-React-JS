import React, { memo, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import SimpleBackdrop from "./spinner";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { deleteMovie } from "../redux/actionCreator";


const MovieDetails = () => {
const movies = useSelector((state)=>state.movies)
const dispatch  = useDispatch()
const navigate = useNavigate()
const { id } = useParams();
const [movie, setMovie] = useState(null);

  useEffect(() => {
    const selectedMovie = movies.find((m) => (m.id).toString() === id);
    setMovie(selectedMovie);
  }, [movies, id]);

  const handleClick = () => {
    Swal.fire({
      title: "Are you sure to delete this movie?",
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
        Swal.fire("Deleted!", "", "success");
        dispatch(deleteMovie(id))
        navigate("/movies")
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  if (!movie) return <SimpleBackdrop></SimpleBackdrop>;
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 d-flex flex-column align-items-center">
            <h2 className="text-center">{movie.title}</h2>
            <img
              className="d-block text-center w-50 border border-2 border-dark rounded-2 shadow"
              src={movie.poster_path || "https://i.ibb.co/KFsG4JF/w-DWwtvk-RRlg-Ti-Ur6-Ty-LSMX8-FCu-Z.jpg"}
              alt=""
            />
          </div>
          <div className="col-lg-6 col-md-12 ">
            <div className="d-flex flex-column align-items-center container row">
              <p className="fs-2 text-center">Overview</p>
              <p className="fs-5 text-center">{movie.overview}</p>
              <div className="d-flex justify-content-center ">
                <p className="fw-2 fs-6 m-2 p-2 rounded bg-warning shadow text-center">
                  Release Date: <br/>
                 <span>{movie.release_date}</span> 
                </p>
                <p className="fw-2 fs-6 m-2 p-2 rounded bg-warning text-center">
                  Vote count:
                  <br/>
                 <span >{movie.vote_count}</span> 
                </p>
                <p className="fw-2 fs-6 m-2 p-2 rounded bg-warning text-center">
                  Vote average:<br/>
                 <span >{movie.vote_average}</span> 
                </p>
              </div>
              <div className="d-flex justify-content-evenly p-2 mt-3">
                <button className="btn btn-danger" onClick={handleClick} >Delete</button>
                <Link to={`/movies/update/${id}`}> <button className="btn btn-secondary">Update</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(MovieDetails);
