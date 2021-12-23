import { useEffect, useState } from "react";
import { Note } from "../../types/note.type";

const Notes = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  // Initial run
  useEffect(() => {
    fetch('http://localhost:8000/notes')
    .then(res => res.json())
    .then((data: Note[]) => {
      setNotes(data);
    });
  }, []);

  return (
    <div>
      { notes.map(note => (
        <p key={ note.id }>{ note.title }</p>
      )) }
    </div>
  )
}

export default Notes;
