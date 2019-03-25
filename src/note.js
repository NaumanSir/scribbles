import React from 'react';
// import FaPencil from 'react-icons/lib/fa/pencil';
// import FaTrash from 'react-icons/lib/fa/trash';

class Note extends React.Component {
    constructor(props) {
        super(props);
        this.edit = this.edit.bind(this);
        this.delete = this.delete.bind(this);
    }
    edit() {
        alert('editing note')
    };

    delete() {
        alert('deleting note')
    };

    render() {
        return(
            <div className="note">
                <p>Note for bulletin board</p>
                <span>
                    <button onClick={this.edit} id="edit">Edit</button>
                    <button onClick={this.delete} id="delete">Delete</button>
                    {/* <button><FaPencil /></button> */}
                    {/* <button><FaTrash /></button> */}
                </span>
            </div>
        )
    }
}

export default Note;