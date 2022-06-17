import './App.css';
import { setState } from 'react';
import MovieDisplay from './MovieDisplay.js';
const [title, setMovieTitle] = setState('StarWars');
const [director, setMovieDirector] = setState('George Lucas');
const [year, setMovieYear] = setState('1979');
const [color, setMovieColor] = setState('');



function App() {
  return (
    function handleSubmit(e) {
      e.preventDefault();
  
      const movie = {
        title: title,
        director: director,
        color: color,
      };
    <><header>
      <p>This right here</p>
    </header>
    
  <div className = 'movieForm'>
    <form  onSubmit = {handleSubmit(e)}>
      <label>Movie Title
      <input value={title} onChange={e => setMovieTitle(e.target.value)}/></label>
      <label>Movie Director
      <input value={director} onChange={e => setMovieDirector(e.target.value)} /></label>
      <label>Movie Year
      <input value={year} onChanve={e => setMovieYear(e.target.value)}/></label>
      <select value={color} onChange={e => setMovieColor(e.target.value)} >
        <option value='1'>Yellow</option>
        <option value='2'>Orange</option>
        <option value='3'>Red</option>
      </select>
      <button>Add Movie</button>
    </form>
  </div>

      <MovieDisplay 
      <div className='display-movies'>
        title={title}
        year={year}
        director={director}
      <h3>{title}</h3>
      <p>{year}</p>
      <p>by {director}</p>
    </div> />
        
      




    </>

  );
}

export default App;
