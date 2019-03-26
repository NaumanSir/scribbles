import React, { Component } from 'react';
import Note from './note';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [
                {
                    id: 2,
                    note: "work on learning React"
                },
                {
                    id: 3,
                    note: "get AC fixed"
                }
            ]
        }
        this.eachNote = this.eachNote.bind(this);
    }

    eachNote(note, i) {
        return (
            <Note key={i} index={i}>{note.note}</Note>
        )
    }

    render() {
        return (
            <div className="board">
                {this.state.notes.map(this.eachNote)}
            </div>
        )
    }
}

export default Board;