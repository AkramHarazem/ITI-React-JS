import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="">
        {/* <Link to={"movies"}> <button className='btn btn-dark p-6 mt-6'>Trending Movies</button></Link> */}
        <h1 className='text-center fw-bold'>Trending Movies</h1>
        <Link to={"movies"}>  <img className='w-100' src="./trending.png" alt="trending movies" /></Link>
        </div>
    );
};

export default Home;