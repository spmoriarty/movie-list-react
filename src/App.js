export default App;
import './App.css';
import { useState } from 'react';
import MovieForm from './MovieForm.js';
import MovieDisplay from './MovieDisplay.js';
import { useEffect } from 'react/cjs/react.production.min';




function App() {

  const [title, setMovieTitle] = useState('StarWars');
  const [director, setMovieDirector] = useState('George Lucas');
  const [year, setMovieYear] = useState('1979');
  const [color, setMovieColor] = useState('lightgrey');
  
  const [allMovies, setMovies] = ('');



  function handleSubmit(e) {
    e.preventDefault();
  
    const movie = {
      title: title,
      director: director,
      color: color,
    };

    const updatedMovies = [...allMovies, movie];
    setMovies(updatedMovies);
  }  
  
  const [movieFilter, setMovieFilter] = useState('');
  const [visibleMovies, setVisibleMovies] = useState(allMovies);

  useEffect(() => {
    setVisibleMovies(allMovies);
    setMovieFilter('');
  }, [allMovies]
  );
  
  const [filterText, setFilterText] = useState('');

  function filterMovies(filterText)

  function deleteMovieByTitle(title) {
    const index = allMovies.findIndex(movie => movie.title === title);
    allMovies.splice(index, 1);
    setMovies([...allMovies]);
  };
  


  
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





