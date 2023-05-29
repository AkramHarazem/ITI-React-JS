const Movie = ({title,disc,link,src})=> {
    return (
        /* <div>
    <div>id: {id}</div>
    <div>name: {name}</div>
    <div>age: {age}</div>
</div> */
<div className="card col-lg-3 col-md-6" >
  <img src={src} className="card-img-top w-100 " alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{disc}</p>
    <a href={link} className="btn btn-primary">More Details</a>
  </div>
</div>
    )
}

export default Movie;