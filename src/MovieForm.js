import React from 'react';

export default function MovieForm({ handleSubmit, title, setMovieColor, setMovieDirector, setMovieTitle, setMovieYear, director, year, color }) {
  return (
      
    <form onSubmit = {handleSubmit}>
      <label>Movie Title
        <input value={title} onChange={e => setMovieTitle(e.target.value)}/></label>
      <label>Movie Director
        <input value={director} onChange={e => setMovieDirector(e.target.value)} /></label>
      <label>Movie Year
        <input value={year} onChange={e => setMovieYear(e.target.value)}/></label>
      <select value={color} onChange={e => setMovieColor(e.target.value)} >
        <option value='1'>Yellow</option>
        <option value='2'>Orange</option>
        <option value='3'>Red</option>
      </select>
      <button>Add Movie</button>
    </form>
  );
}
