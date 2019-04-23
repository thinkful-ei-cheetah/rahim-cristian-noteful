import React from 'react';
import Note from '../Note/Note';

export default class NoteList extends React.Component {
  render() {
    const notes = this.props.notes.map(element => {
      return (
        <li key={element.id}>
          <Note
            noteName={element.name}
            dateModified={element.modified}
            folderId={element.folderId}
            content={element.content}
          />
        </li>
      );
    });
    return <ul className='noteList'>{notes}</ul>;
  }
}
