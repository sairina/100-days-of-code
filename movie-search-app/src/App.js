import React from 'react';
import './App.css';
import SearchMovies from './SearchMovies';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <h1>React Movie Search</h1>
        <SearchMovies />
      </div>
    </div>
  );
}

export default App;
