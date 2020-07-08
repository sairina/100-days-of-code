import React from 'react';
import './SearchMovies.css';

export default function SearchMovies() {
  const searchMovies = async (e) => {
    e.preventDefault();

    const query = 'Jurassic Park';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=34d2cc8126a9b2a930962264a0c490bf&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const response = await fetch(url);
      const data = response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form className='form' onSubmit={searchMovies}>
      <label className='label' htmlFor='query'>Movie Title</label>
      <input className='input' type='text' name='query' placeholder='e.g. Jurassic Park' />
      <button className='button' type='submit'>Search</button>
    </form>
  );
}