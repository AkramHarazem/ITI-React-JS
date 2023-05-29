import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { memo } from "react";
import Swal from "sweetalert2";
import { context } from "../context/Context";
import { Link } from "react-router-dom";

const Movie = ({ props }) => {
  const { DeleteFun } = useContext(context);
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
        DeleteFun(props.id);
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };
  return (
    <Card
      sx={{
        width: "300px",
        margin: "10px",
        boxShadow: "0px 7px 29px 0px rgba(100, 100, 111, 0.5)",
        position: "relative",
      }}
    >
       <Link to={`${props.id}`}><CardMedia
        sx={{ height: 440 }}
        image={
          props.poster_path || "https://i.ibb.co/KFsG4JF/w-DWwtvk-RRlg-Ti-Ur6-Ty-LSMX8-FCu-Z.jpg"
        }
        title={props.title}
      /> </Link>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.overview}
        </Typography>
      </CardContent>
      <br />
      <CardActions
        sx={{
          position: "absolute",
          bottom: 0,
        }}
      >
        <Button onClick={handleClick} size="small">
          Delete
        </Button>
        <Link to={`update/${props.id}`}>
          <Button size="small">Update</Button>
        </Link>
        <Link to={`${props.id}`}>
          <Button size="small">Details</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default memo(Movie);
