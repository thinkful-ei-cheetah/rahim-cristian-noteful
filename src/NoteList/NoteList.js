import React from 'react';
import Note from '../Note/Note';

export default class NoteList extends React.Component {
    render() {
        return (
            <ul className="noteList">
                <Note />
                <Note />
                <Note />
            </ul>
        )
    }
}