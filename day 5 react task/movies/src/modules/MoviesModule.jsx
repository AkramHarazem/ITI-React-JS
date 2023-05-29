import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import MovieDetails from '../components/MovieDetails';
// import UpdateMovie from '../components/UpdateMovie';
// import NotFound from '../components/NotFound';
// import AddMovie from '../components/AddMovie';
import Context from '../context/Context';
// import Movies from '../components/Movies';
import {lazy,Suspense} from "react";
import SimpleBackdrop from '../components/spinner';
import DrawerAppBar from '../components/NavBar';
const Movies= lazy(()=>import('../components/Movies'))
const MovieDetails= lazy(()=>import('../components/MovieDetails'))
const UpdateMovie= lazy(()=>import('../components/UpdateMovie'))
const NotFound= lazy(()=>import('../components/NotFound'))
const AddMovie= lazy(()=>import('../components/AddMovie'))





const MoviesModule = () => {
    return (
    <Suspense fallback={<SimpleBackdrop></SimpleBackdrop>}>
        <Context>   
            <Routes>
                <Route element= {<DrawerAppBar></DrawerAppBar>}></Route>
                <Route index element={<Movies></Movies>}></Route>
                <Route path='add' element={<AddMovie></AddMovie>}></Route>
                <Route path='update/:id' element={<UpdateMovie></UpdateMovie>}></Route>
                <Route path=':id' element={<MovieDetails></MovieDetails>}></Route>
                <Route path='*' element={<NotFound></NotFound>}></Route>
            </Routes>
        </Context>
    </Suspense>  
    );
};

export default MoviesModule;