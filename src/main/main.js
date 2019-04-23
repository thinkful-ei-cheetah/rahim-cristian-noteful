import React from 'react';
import NoteList from '../NoteList/NoteList';

export default class Main extends React.Component {
    render() {
        return (
            <section className="main">
                <NoteList />
                <button>Add note</button>
            </section>
        )
    }
}