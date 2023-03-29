import { useState } from "react";

const AddNote = ({ handleAddNote }) => {

    const [noteText, setNodeText] = useState('');

    const characterLimit = 200;

    const handleChange = (e) => {
        if (characterLimit - e.target.value.length >= 0) {
            setNodeText((noteText) => noteText = e.target.value);
        }
    }

    const handleSaveClick = (e) => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNodeText('');
        }
    }

    return (
        <div className="note new">
            <textarea value={noteText} onChange={handleChange} rows='8' cols='10' placeholder="Type a New note...">
            </textarea>
            <div className="note-footer">
                <small>{characterLimit - noteText.length} Remaining</small>
                <button onClick={handleSaveClick} className="save">Save</button>
            </div>
        </div>
    )
}

export default AddNote;