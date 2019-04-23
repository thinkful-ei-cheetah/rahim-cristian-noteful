import React from 'react';
import STORE from '../STORE';
import SideBar from '../SideBar/SideBar';
import Content from '../Content/Content';

export default class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header className="topBar">
          <h1>
            <a href='/'>NOTEFUL</a>
          </h1>
        </header>
        <SideBar />
        <Content />
      </React.Fragment>
    );
  }
}
