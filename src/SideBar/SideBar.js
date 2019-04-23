import React from 'react';
import FolderList from '../FolderList/FolderList';

export default class SideBar extends React.Component {
  render() {
    return (
      <section className='sideBar'>
        <FolderList folders={this.props.folders} />
        <button>Add Folder</button>
      </section>
    );
  }
}
