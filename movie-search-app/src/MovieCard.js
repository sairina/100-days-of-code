import React from 'react';
import './MovieCard.css';

export default function MovieCard({ movie }) {

  return (
    <div className='Card'>
      <img className='Card--image' src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
        alt={movie.title + ' poster'}
      />
      <div className='Card-content'>
        <h3 className='Card--title'>{movie.title}</h3>
        <p><small>RELEASE DATE: {movie.release_date}</small></p>
        <p><small>RATING: {movie.vote_average}</small></p>
        <p className='Card-desc'>{movie.overview}</p>
      </div>
    </div>
  )
}