import React, { useState } from 'react';
import './SearchMovies.css';
import axios from 'axios';

export default function SearchMovies() {

  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=34d2cc8126a9b2a930962264a0c490bf&language=en-US&query=${query}&page=1&include_adult=false`);
      const data = response.data.results;
      setMovies(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form className='form' onSubmit={searchMovies}>
      <label className='label' htmlFor='query'>Movie Title</label>
      <input className='input' 
          type='text' 
          name='query'
          placeholder='e.g. Jurassic Park' 
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      <button className='button' type='submit'>Search</button>
    </form>
    
  );
}