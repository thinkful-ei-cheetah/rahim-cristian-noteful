import React from 'react';

export default class Folder extends React.Component {
  render() {
    return (
      <div className='folder'>
        <a href='/'>{this.props.folderName}</a>
      </div>
    );
  }
}
