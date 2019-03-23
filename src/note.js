import React from 'react';

class Note extends React.Component {
    render() {
        return(
            <div className="note">
                <p>Note for bulletin board</p>
                <span>
                    <button>Edit</button>
                    <button>Remove</button>
                </span>
            </div>
        )
    }
}

export default Note;