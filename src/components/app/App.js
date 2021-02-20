import React from 'react';
import './app.css';

import AppHeader from '../app-header';
import Search from '../search';
import StatusFilter from '../status-filter';

const App = () => {


  return (
    <div className="app"> 
        <AppHeader/>
      <div className="search-panel d-flex">
        <Search/>
        <StatusFilter/>
      </div>
      
    </div>
  );
}

export default App;