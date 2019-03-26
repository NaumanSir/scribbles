import React, { Component } from 'react';
// import FaPencil from 'react-icons/lib/fa/pencil';
// import FaTrash from 'react-icons/lib/fa/trash';
// import FaFloppyO from 'react-icons/lib/fa/floppy-o';

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }
        this.edit = this.edit.bind(this);
        this.delete = this.delete.bind(this);
        this.save = this.save.bind(this);
        this.renderForm = this.renderForm.bind(this);
        this.renderDisplay = this.renderDisplay.bind(this);
    }
    edit() {
        this.setState({
            editing: true
        })
    };

    delete() {
        alert('deleting note')
    };

    save() {
        alert(this._newText.value)
    }

    renderForm() {
        return(
            <div className="note">
                <form>
                    <textarea ref={input => this._newText = input}/>
                    <button onClick = {this.save}>Save</button>
                </form>
            </div>
        )
    }

    renderDisplay() {
        return(
            <div className="note">
                <p>{this.props.children}</p>
                <span>
                    <div id="btns">
                        <button onClick={this.edit} id="edit">Edit</button>
                        <button onClick={this.delete} id="delete">Delete</button>
                        {/* <button><FaPencil /></button> */}
                        {/* <button><FaTrash /></button> */}
                    </div>
                </span>
            </div>
        )
    }
    render() {
        if (this.state.editing) {
            return this.renderForm()
        } else {
            return this.renderDisplay()
        }
    }
}

export default Note;