import React, { Component } from 'react';
import Note from './note';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: []
        }
        this.create = this.create.bind(this);
        this.eachNote = this.eachNote.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
        this.nextId = this.nextId.bind(this);
    }

    componentWillMount() {
        var self = this;
        if (this.props.count) {
            fetch(`https://baconipsum.com/api/?type=all-meat&sentences=${this.props.count}`)
            .then(response => response.json())
            .then(json => json[0]
                .split('. ')
                .forEach(sentence => self.create(sentence.substring(0, 25))))
        }
    }

    create(text) {
        this.setState(prevState => ({
            notes: [
                ...prevState.notes,
                {
                    id: this.nextId(),
                    note: text
                }
            ]
        }))
    }

    nextId() {
        this.uniqueId = this.uniqueId || 0;
        return this.uniqueId++
    }

    update(newText, i) {
        console.log("new text: ", newText);
        this.setState(prevState => ({
            notes: prevState.notes.map(
                note => (note.id !== i) ? note : {...note, note: newText}
            )
        }))
    }

    delete(id) {
        console.log('removing item at', id);
        this.setState(prevState => ({
            notes: prevState.notes.filter(note => note.id !== id)
        }))
    }

    eachNote(note, i) {
        return (
            <Note key={note.id} index={note.id} onChange={this.update} onRemove={this.delete}>{note.note}</Note>
        )
    }

    render() {
        return (
            <div className="board">
                {this.state.notes.map(this.eachNote)}
                <button onClick={this.create.bind(null, "create a new note here")} id="create_note">New Note</button>
            </div>
        )
    }
}

export default Board;