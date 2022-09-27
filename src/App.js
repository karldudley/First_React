import React from 'react';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = 'Favourite Music'
  const likes = 50
  const link = "http://www.google.com"

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        {/* <p>Liked { likes } times</p>
        <p>{ 10 }</p>
        <p>{ "Hey" }</p>
        <p>{ [1,2,3,4,5] }</p>
        <p>{ Math.random()*10 }</p>
        <a href={link}>Google</a> */}
      </div>

    </div>
  );
}

export default App;
