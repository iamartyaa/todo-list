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
    }
  ]);

  return (<div className="container">
    <NotesList notes={notes}/>
  </div>)
}

export default App;