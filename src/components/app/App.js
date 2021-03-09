import React from 'react';
import './app.css';

import AppHeader from '../app-header';
import Feed from '../feed';
import FeedAddPost from '../feed-add-post';
import SideBar from '../side-bar';
import Contacts from '../contacts';
import CarouselStories from '../carousel/carousel';


const App = () => {

  // const addPost = (body) => {
  //   const newItem = {
  //     label: body

  //   }
  // }

  return (
    <div>
      <div className="appheader">
        <AppHeader/>
      </div>
      <CarouselStories/>
      <div className="sidebars">
      <Contacts/>
      <SideBar/>
      </div>

      <div className="feed">
        <FeedAddPost
            // onAdd={addPost}   
            />
        <Feed/>
      </div>
    </div>
  );
}

export default App;