import React from 'react';
import STORE from '../STORE';

export default class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <h1>
            <a href='/'>NOTEFUL</a>
          </h1>
        </header>
        <main>
          <section>
            <ul>
              <li>Folder 1</li>
              <li>Folder 2</li>
              <li>Folder 3</li>
              <li>
                <button>Add Folder</button>
              </li>
            </ul>
          </section>
          <section>
            <ul>
              <li>
                <a href>Note 1</a>
                <p>Date modified</p>
                <button>Delete Note</button>
              </li>
              <li>
                <a href>Note 1</a>
                <p>Date modified</p>
                <button>Delete Note</button>
              </li>
              <li>
                <a href>Note 1</a>
                <p>Date modified</p>
                <button>Delete Note</button>
              </li>
              <li>
                <a href>Note 1</a>
                <p>Date modified</p>
                <button>Delete Note</button>
              </li>
              <li>
                <a href>Add note</a>
              </li>
            </ul>
          </section>
        </main>
      </React.Fragment>
    );
  }
}
