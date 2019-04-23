import React from 'react';
import FolderList from '../FolderList/FolderList'

export default class SideBar extends React.Component {
    render() {
        return( 
            <section className="sideBar">
                <FolderList />
                <button>Add Folder</button>
            </section>

        )
    }
}
