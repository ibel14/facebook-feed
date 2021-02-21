import React from 'react';
import './app.css';

import AppHeader from '../app-header';
import Search from '../search';
import StatusFilter from '../status-filter';
import Feed from '../feed';
import FeedAddPost from '../feed-add-post';

const App = () => {


  return (
    <div className="app"> 
        <AppHeader/>
      <div className="search-panel d-flex">
        <Search/>
        <StatusFilter/>
      </div>
      <Feed/>
      <FeedAddPost/>
    </div>
  );
}

export default App;