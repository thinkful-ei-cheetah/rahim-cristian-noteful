import React from 'react';
import NoteList from '../NoteList/NoteList';

export default class Content extends React.Component {
    render() {
        return (
            <section className="content">
                <NoteList />
                <button>Add note</button>
            </section>
        )
    }
}