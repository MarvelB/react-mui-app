import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { CreateCSSProperties, createStyles, makeStyles, PropsFunc } from '@mui/styles';
import { Theme } from '@mui/material';
import { CSSProperties } from '@mui/styled-engine';

const Create = () => {

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

      <Button
        type="submit"
        sx={{
          fontSize: 60,
          backgroundColor: 'violet',
          ":hover": {
            backgroundColor: 'blue'
          }
        }}
        color="secondary"
        variant="contained"
        onClick={() => console.log('Clicked')}
        endIcon={<KeyboardArrowRightIcon />}
      >
        Submit
      </Button>

    </Container>
  )
}

export default Create;
