import React, {useState} from 'react';
import './app.css';

import AppHeader from '../app-header';
import Feed from '../feed';
import FeedAddPost from '../feed-add-post';
import SideBar from '../side-bar';
import Contacts from '../contacts';
import CarouselStories from '../carousel/carousel';
import FeedItem from '../feed-items';


function App() {

  const [data, setData] = useState([
    {label: {FeedItem}, id: 1},
    {label: {FeedItem}, id: 2},
    {label: {FeedItem}, id: 3},
  ]);

  const [maxId, setMaxId] = useState(4);

  const addItem = (body) => {
    setMaxId(maxId + 1)
    const newItem = {
          label: body,
          id: maxId
    }
    setData((data) => {
        const newArr = [...data, newItem];
        return newArr
    })
}

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
        onAdd={addItem}/>
        <Feed/>
      </div>
    </div>
  );
}

export default App;