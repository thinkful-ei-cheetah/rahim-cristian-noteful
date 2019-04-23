import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import STORE from '../STORE';
import SideBar from '../SideBar/SideBar';
import Main from '../Main/Main';

export default function App() {
  const { folders, notes } = STORE;
  const state = { folders, notes };

  return (
    <React.Fragment>
      <header className='topBar'>
        <h1>
          <a href='/'>NOTEFUL</a>
        </h1>
      </header>
      <SideBar folders={state.folders} />
      <Main notes={state.notes} />
    </React.Fragment>
  );
}
