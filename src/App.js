export default App;
import './App.css';
import { useState } from 'react';
import MovieForm from './MovieForm.js';




function App() {

  const [title, setMovieTitle] = useState('StarWars');
  const [director, setMovieDirector] = useState('George Lucas');
  const [year, setMovieYear] = useState('1979');
  const [color, setMovieColor] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  
    const movie = {
      title: title,
      director: director,
      color: color,
    };
    console.log(movie);
  }  
  return <><header>
    <p>This right here</p>
  </header>
    
  <div className = 'movieForm'>
    <MovieForm 
      setMovieColor={setMovieColor}
      title={title}
      director={director}
      year={year}
      color={color}
      handleSubmit={handleSubmit}
      setMovieDirector={setMovieDirector}
      setMovieTitle={setMovieTitle}
      setMovieYear={setMovieYear}
    />
    <div className = 'movie-poster' color = {color} >
      <h2>{title}</h2>
      <h3>{director}</h3>
      <p>{year}</p>
    </div>
  </div> 


  
  </>;

}





