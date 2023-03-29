import { useState } from "react";
import NotesList from "./components/NotesList";
import { nanoid } from 'nanoid';

const App = () => {

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'This is my first Note',
      date: '15/03/23',
    },
    {
      id: nanoid(),
      text: 'This is my second Note',
      date: '23/03/23',
    },
    {
      id: nanoid(),
      text: 'This is my third Note',
      date: '25/03/23',
    },
    {
      id: nanoid(),
      text: 'This is my new Note',
      date: '28/03/23',
    }
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    }

    const newNotes = [...notes, newNote];

    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return (<div className="container">
    <NotesList notes={notes} handleAddNote={addNote} handleDeleteNote={deleteNote} />
  </div>)
}

export default App;