import React from 'react';
import Folder from '../Folder/Folder';

export default class FolderList extends React.Component {
  render() {
    const folders = this.props.folders.map(element => {
      return (
        <li key={element.id}>
          <Folder folderName={element.name} />
        </li>
      );
    });
    return <ul className='folderList'>{folders}</ul>;
  }
}
