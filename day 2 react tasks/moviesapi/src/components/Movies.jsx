import axios from 'axios';
import React, { Component, PureComponent } from 'react'
import { v4 as uuid } from 'uuid';


const apiKey = "&api_key=9813ce01a72ca1bd2ae25f091898b1c7";
const url = "https://api.themoviedb.org/3";
const imgPath = "https://image.tmdb.org/t/p/w500/";
const path = "/discover/movie?sort_by=popularity.desc";
const apiUrl = url + path + apiKey;

export default class Movies extends PureComponent{
   
constructor (){
    super()
    this.state = {movies:null}
  }

componentDidMount(){
    axios.get(apiUrl)
    .then(
        (res)=>{ 
            // console.log(res.data.results)
            this.setState({movies:res.data.results})
        });
 }

// shouldComponentUpdate(){
// return true
//  }

render() {
    // console.log(this.state.movies)
    if(!this.state.movies) return <div>Loading...</div>
    return (
        <>
           {this.state.movies.map((movie)=>{ 
               return (
            <div className='alert alert-info w-50 h-50 m-auto mb-2 col-3 text-center'>
               <div key={uuid()}><img key={uuid()} className='w-50' src={imgPath+movie.poster_path} alt={movie.original_title+"image"}/></div> 
               <div className='fw-bold fs-4' key={uuid()}>{movie.original_title}</div>
               <div className='fs-6 fw-light'>Release Date: {movie.release_date}</div> 
               <div className='fs-6 truncate' key={uuid()}>{movie.overview}</div> 
            </div>
               )
           })}
        </>
    )
  }
}
