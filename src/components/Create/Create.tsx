import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import TextField from '@mui/material/TextField';
import { SxProps } from '@mui/system/styleFunctionSx';
import { Theme } from '@mui/material';
import { useState } from 'react';

const classes = {
  field: {
    marginTop: 2,
    marginBottom: 2,
    display: 'block',
  } as SxProps<Theme>,
};

const Create = () => {
  const [title, setTitle] = useState<string>('');
  const [details, setDetails] = useState<string>('');
  const [titleError, setTitleError] = useState<boolean>(false);
  const [detailsError, setDetailsError] = useState<boolean>(false);

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
      console.log(title, details)
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
