import React from 'react';
import './app.css';

import AppHeader from '../app-header';
import Search from '../search';
import StatusFilter from '../status-filter';
import Feed from '../feed';

const App = () => {


  return (
    <div className="app"> 
        <AppHeader/>
      <div className="search-panel d-flex">
        <Search/>
        <StatusFilter/>
      </div>
      <Feed/>
    </div>
  );
}

export default App;