import React from 'react';
import Folder from '../Folder/Folder';

export default class FolderList extends React.Component {
    render() {
        return(
            <ul className="folderList">
                <Folder />
                <Folder />
                <Folder />
            </ul>
        )
    }
}