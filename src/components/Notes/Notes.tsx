import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import { Note } from "../../types/note.type";
import { Container } from "@mui/material";
import NoteCard from '../NoteCard/NoteCard';

const Notes = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  const handleDelete = async (id: number): Promise<void> => {
    await fetch('http://localhost:8000/notes/' + id, {
      method: 'DELETE',
    });

    const newNotes = notes.filter(note => note.id !== id);

    setNotes(newNotes);
  }

  // Initial run
  useEffect(() => {
    fetch('http://localhost:8000/notes')
    .then(res => res.json())
    .then((data: Note[]) => {
      setNotes(data);
    });
  }, []);

  return (
    <Container>
      {/* <Grid container>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>1</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>2</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>3</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>4</Paper>
        </Grid>
      </Grid> */}

      <Grid container spacing={3}>
        { notes.map(note => (
          <Grid item xs={12} md={6} lg={4} key={ note.id }>
            <NoteCard note={note} handleDelete={handleDelete} />
          </Grid>
        )) }
      </Grid>
    </Container>
  )
}

export default Notes;
