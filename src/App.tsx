import React from 'react';
import './App.css';
import { Hello } from './components/Hello';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello  firstName="Jose" lastName="Sanchez"/>

      </header>
    </div>
  );
}

export default App;
