import React from 'react';
import './app.css';

import AppHeader from '../app-header';
import Feed from '../feed';
import FeedAddPost from '../feed-add-post';
import SideBar from '../side-bar';
import Contacts from '../contacts';


const App = () => {


  return (
    <div>
      <div className="appheader">
        <AppHeader/>
      </div>

      <div className="sidebars">
      <Contacts/>
      <SideBar/>
      </div>

      <div className="app">
        <FeedAddPost/>
        <Feed/>
      </div>
    </div>
  );
}

export default App;