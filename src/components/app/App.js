import React from 'react';
import './app.css';

import AppHeader from '../app-header';
import Search from '../search';
import Feed from '../feed';
import FeedAddPost from '../feed-add-post';

function App() {


  return (
    <div>
      <div className="appheader">
        <AppHeader/>
      </div>
      <div className="search">
        <Search/>
      </div>
      <div className="app">
        <FeedAddPost/>
        <Feed/>
      </div>
    </div>
  );
}

export default App;