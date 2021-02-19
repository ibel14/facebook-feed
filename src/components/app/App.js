import React, {useState} from 'react';
import './App.css';
import Search from '../search/search';

function App() {

  const UpdateSearch = (filter) => {
    setFilter(filter);
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="search-panel d-flex">
        <Search
        UpdateSearch={UpdateSearch}/>

      </div>
    </div>
  );
}

export default App;