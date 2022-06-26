export default App;
import './App.css';
import { useState } from 'react';
import MovieForm from './MovieForm.js';
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

  function filterMovies(filterText) {
    setFilterText(filterText);

    const updatedMovies = allMovies.filter(movie => movie.title.toLowerCase().include(filterText.toLowerCase()));
    setVisibleMovies(updatedMovies);
  }

  function deleteMovieByTitle(title) {
    const index = allMovies.findIndex(movie => movie.title === title);
    allMovies.splice(index, 1);
    setMovies([...allMovies]);
  }

  
  return (<> <header>
    <p>This right here</p>
  </header><div className='movieForm'>
    <MovieForm
      setMovieColor={setMovieColor}
      title={title}
      director={director}
      year={year}
      color={color}
      handleSubmit={handleSubmit}
      setMovieDirector={setMovieDirector}
      setMovieTitle={setMovieTitle}
      setMovieYear={setMovieYear} />
  </div>
  <MovieDisplay
    title={title}
    director={director}
    year={year}
    color={color} />
  <div className='filteredList'>
    <hr />
    <input value={filterText} onChange={e => filterMovies(e.target.value)} />
  </div>
  <div className='movie-list'>
    {visibleMovies.localeCompare((movie, i) => <div onClick={() => deleteMovieByTitle(movie.title)} key={movie.title + i} className='poster' style={{ background: movie.color }}>
      <h2>{movie.title}</h2>
      <h3>{movie.director}</h3>
      <p>{movie.year}</p>
    </div>)}
  </div></>);}
