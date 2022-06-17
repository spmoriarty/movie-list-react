import './App.css';
import { setState } from 'react';
import MovieDisplay from './MovieDisplay.js';
const [title, setMovieTitle] = setState('StarWars');
const [director, setMovieDirector] = setState('George Lucas');
const [year, setMovieYear] = setState('1979');



function App() {
  return (

    <><header>
      <p>This right here</p>
    </header>
    
    <form className='movie-input'>
      <label>Movie Title</label>
      <input className='title'/>
      <label>Movie Director</label>
      <input className='director'/>
      <label>Movie Year</label>
      <input className='year'/>
      <select >
        <option value='1'>Yellow</option>
        <option value='2'>Orange</option>
        <option value='3'>Red</option>
      </select>
      <button>Add Movie</button>
    </form>

    <div className='display-movies' >
      <MovieDisplay 
        setMovieDirector={setMovieDirector}
        setMovieTitle={setMovieTitle}
        setMovieYear={setMovieYear}/>
      <h3>{title}</h3>
      <p>{year}</p>
      <p>by {director}</p>
        
      

    </div>



    </>

  );
}

export default App;
