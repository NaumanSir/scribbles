import React from 'react';
import Note from './note';

class Board extends React.Component {
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
            <note key={i} index={i}>{note.note}</note>
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