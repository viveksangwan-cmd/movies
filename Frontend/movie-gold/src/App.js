import './App.css';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import Layout from './Components/Layout';
import Home from './Components/Home';
import { Routes, Route, Router  } from 'react-router-dom';
import Header from './Components/header/Header';
import Trailer from './Components/trailer/Trailer';
import Reviews from './Components/reviews/Reviews';
import NotFound from './Components/notFound/NotFound';

function App() {
  const [movies,setMovies] = useState();
  const [movie,setMovie] = useState();
  const [reviews,setReviews]  = useState();

  const getMovies = async  ()=>{
    try{
      const response = await api.get("/api/v1/movies");
      setMovies(response.data);
    }catch(err){
      console.log(err);
    }
  }

  const getMovieData = async (movieId) => {
    try{
      const response = await api.get(`/api/v1/movies/${movieId}`);
      const singleMovie = response.data;
      setMovie(singleMovie);
      setReviews(singleMovie.reviewIds);
    }catch(err){
      
    }
  }

  useEffect(()=>{
    getMovies();
  },[])
  return (
    <div className="App">
      <Header/>
      <Routes >
          <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home movies={movies}/>}></Route>
          <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route>
          <Route path="/Reviews/:movieId" element={<Reviews getMovieData={getMovieData} movie={movie} 
            reviews={reviews} setReviews={setReviews}/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
