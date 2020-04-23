import React from 'react';
import Movies from './components/moviesSearch.component';
import Headline from './components/headline.component';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App" style={{overflowX: "hidden"}}>
      <Headline />
      <Movies />
    </div>
  );
}

export default App;
