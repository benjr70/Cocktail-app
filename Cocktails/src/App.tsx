import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HomePage } from './components/HomePage/HomePage';
import { homedir } from 'os';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HomePage></HomePage>
      </header>
    </div>
  );
}

export default App;
