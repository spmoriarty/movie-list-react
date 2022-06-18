export default App;
import './App.css';
import { useState } from 'react';
import MovieForm from './MovieForm.js';
import MovieDisplay from './MovieDisplay.js';




function App() {

  const [title, setMovieTitle] = useState('StarWars');
  const [director, setMovieDirector] = useState('George Lucas');
  const [year, setMovieYear] = useState('1979');
  const [color, setMovieColor] = useState('');
  const [movieFilter, setMovieFilter] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  
    const movie = {
      title: title,
      director: director,
      color: color,
    };
    
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
    <MovieDisplay
      title={title}
      director={director}
      year={year}
      color={color}
    />
    <div>
      <hr/>
      <label>Movie Filter : </label>
      <input onChange={e => setMovieFilter(e.target.value)}/>
      <hr/>
    </div>


  </div> 


  
  </>;

}





