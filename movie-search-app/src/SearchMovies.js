import React from 'react';

export default function SearchMovies() {
  return (
    <form className='form'>
      <label className='label' htmlFor='query'>Movie Title</label>
      <input className='input' type='text' name='query' placeholder='e.g. Jurassic Park'/>
      <button className='button' type='submit'>Click Me</button>
    </form>
  );
}