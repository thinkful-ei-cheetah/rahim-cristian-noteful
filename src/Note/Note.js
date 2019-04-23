import React from 'react';

export default class Note extends React.Component {
  render() {
    return (
      <div className='note'>
        <a href='/'>{this.props.noteName}</a>
        <p>Date modified: {this.props.dateModified}</p>
        <button>Delete Note</button>
      </div>
    );
  }
}
