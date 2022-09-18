import './App.css';
// routing
import { Route, Routes } from 'react-router-dom';
// React Slick
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// pages
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import PlayPage from './pages/PlayPage';
import axios from 'axios';

axios.defaults.baseURL="https://api.themoviedb.org/3"
axios.defaults.params ={};
axios.defaults.params["app_key"]= process.env.REACT_APP_API_KEY;


function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/movie/:id' element={<MoviePage/>}/>
      <Route path='/plays' element={<PlayPage/>}/>
    </Routes>
  );
}

export default App;
