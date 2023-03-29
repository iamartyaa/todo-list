import { useState } from "react";

const AddNote = ({ handleAddNote }) => {

    const [noteText, setNodeText] = useState('');

    const handleChange = (e) => {
        setNodeText((noteText) => noteText = e.target.value);
    }

    const handleSaveClick = (e) => {
        handleAddNote(noteText);
        setNodeText('');
    }

    return (
        <div className="note new">
            <textarea value={noteText} onChange={handleChange} rows='5' cols='8' placeholder="Type a New note...">
            </textarea>
            <div className="note-footer">
                <small>200 Remaining</small>
                <button onClick={handleSaveClick} className="save">Save</button>
            </div>
        </div>
    )
}

export default AddNote;