import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import STORE from './STORE';
import Main from './main/main';

function App() {
  const { folders, notes } = STORE;
  const state = { folders, notes };

  return (
    <div className='App'>
      <Main />
    </div>
  );
}

export default App;
