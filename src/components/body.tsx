import React from 'react';
import rendercito from '../media/rendercito_01.jpg';
import '../App.css';

function App() {
  return (
    <div className="App">
      <body className="App-body">
        <p>
          Algun día este va a ser mi portfolio.
        </p>
        <p>
          Mientras tanto chequeate este pedazo de render:
        </p>
        <img src={rendercito} className="App-render" alt="alto render"/>
      </body>
    </div>
  );
}

export default App;


