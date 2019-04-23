import React from 'react';

export default class Note extends React.Component {
    render() {
        return (
            <li className="note">
                <a href>Note 1</a>
                <p>Date modified</p>
                <button>Delete Note</button>
            </li>
        )
    }
}