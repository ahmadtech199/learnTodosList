import React from 'react';
import Test from "./Components/Test"
import Todos from "./Components/Todos"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Test />
        <Todos />

      </header>
    </div>
  );
}

export default App;
