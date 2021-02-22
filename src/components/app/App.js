import React from 'react';
import './app.css';

import AppHeader from '../app-header';
import Search from '../search';
import Feed from '../feed';
import FeedAddPost from '../feed-add-post';

const App = () => {


  return (
    <div className="app"> 
      <div className="search-panel">
        <Search/>
      </div>
        <AppHeader/>
      <Feed/>
      <FeedAddPost/>
    </div>
  );
}

export default App;