import React from 'react';
import FaPencil from 'react-icons/lib/fa/pencil';
import FaTrash from 'react-icons/lib/fa/trash';

class Note extends React.Component {
    render() {
        return(
            <div className="note">
                <p>Note for bulletin board</p>
                <span>
                    <button><FaPencil /></button>
                    <button><FaTrash /></button>
                </span>
            </div>
        )
    }
}

export default Note;