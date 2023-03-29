const AddNote = () => {
    return (
        <div className="note new">
            <textarea rows='5' cols='8' placeholder="Type a New note...">

            </textarea>
            <div className="note-footer">
                <small>200 Remaining</small>
                <button className="save">Save</button>
            </div>
        </div>
    )
}

export default AddNote;