import React from 'react';

export default function MovieDisplay({ title, director, year, color }) {
  return (
    <div className = 'movie-poster' setmoviecolor = {color} >
      <h2>{title}</h2>
      <h3>{director}</h3>
      <p>{year}</p>
    </div>
  );
}
