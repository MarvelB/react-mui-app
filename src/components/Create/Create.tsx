import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { Note, NoteCategory } from '../../types/note.type';
import { SxProps } from '@mui/system/styleFunctionSx';
import { FormControl, FormLabel, FormControlLabel, Theme } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const classes = {
  field: {
    marginTop: 2,
    marginBottom: 2,
    display: 'block',
  } as SxProps<Theme>,
  formLabel: {
    textTransform: 'capitalize',
  } as SxProps<Theme>,
};

const Create = () => {
  const [title, setTitle] = useState<string>('');
  const [details, setDetails] = useState<string>('');
  const [titleError, setTitleError] = useState<boolean>(false);
  const [detailsError, setDetailsError] = useState<boolean>(false);
  const [category, setCategory] = useState<NoteCategory>(NoteCategory.TODOS);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (!title) {
      setTitleError(true);
    } else {
      setTitleError(false);
    }

    if (!details) {
      setDetailsError(true);
    } else {
      setDetailsError(false);
    }

    if (title && details) {
      fetch('http://localhost:8000/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ category, details, title } as Partial<Note>)
      })
      .then(() => {
        navigate('/');
      })
    }
  }

  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        color="textSecondary"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <form
        noValidate
        autoComplete="off"
        onSubmit={(e) => handleSubmit(e)}
      >
        <TextField
          variant="outlined"
          label="Note Title"
          color="secondary"
          sx={classes.field}
          fullWidth
          required
          onChange={(e) => setTitle(e.target.value)}
          error={titleError}
        />

        <TextField
          variant="outlined"
          label="Details"
          color="secondary"
          sx={classes.field}
          fullWidth
          required
          multiline
          onChange={(e) => setDetails(e.target.value)}
          rows={4}
          error={detailsError}
        />

        <FormControl sx={classes.field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup value={category} onChange={(e) => setCategory(e.target.value as NoteCategory)}>
            <FormControlLabel
              value={NoteCategory.MONEY}
              sx={classes.formLabel}
              control={<Radio color="secondary" />}
              label={NoteCategory.MONEY} />
            <FormControlLabel
              value={NoteCategory.TODOS}
              sx={classes.formLabel}
              control={<Radio color="secondary" />}
              label={NoteCategory.TODOS} />
            <FormControlLabel
              value={NoteCategory.REMINDERS}
              sx={classes.formLabel}
              control={<Radio color="secondary" />}
              label={NoteCategory.REMINDERS} />
            <FormControlLabel
              value={NoteCategory.WORK}
              sx={classes.formLabel}
              control={<Radio color="secondary" />}
              label={NoteCategory.MONEY} />
          </RadioGroup>
        </FormControl>

        <Button
          type="submit"
          // sx={{
          //   fontSize: 60,
          //   backgroundColor: 'violet',
          //   ":hover": {
          //     backgroundColor: 'blue'
          //   }
          // }}
          color="secondary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>

    </Container>
  )
}

export default Create;
