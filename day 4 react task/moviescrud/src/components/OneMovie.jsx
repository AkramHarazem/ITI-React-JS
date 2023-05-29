import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { memo } from "react";
import Swal from "sweetalert2";


const OneMovie = ({ props, DeleteFun }) => {
  console.log(props);

  const handleClick = () => {
    // DeleteFun(props.id);
    console.log(props.id);
    Swal.fire({
      title: 'Are you sure to delete this movie?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Yes',
      denyButtonText: 'Cancel',
      customClass: {
        actions: 'my-actions',
        cancelButton: 'order-1 right-gap',
        confirmButton: 'order-2',
        denyButton: 'order-3',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Deleted!', '', 'success')
    DeleteFun(props.id);

      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  };

  return (
    <Card
      sx={{
        maxWidth: 300,
        margin: "10px",
        boxShadow: "0px 7px 29px 0px rgba(100, 100, 111, 0.5)",
        position: 'relative'
      }}
    >
      <CardMedia
        sx={{ height: 440 }}
        image={`https://image.tmdb.org/t/p/w500/${props.poster_path}`}
        title={props.title}
      />
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
      position: 'absolute',
      bottom: 0
        }}
      >
        <Button onClick={handleClick} size="small">
          Delete
        </Button>
        <Button size="small">Update</Button>
      </CardActions>
    </Card>
  );
};
export default memo(OneMovie);
