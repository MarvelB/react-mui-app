import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Note, NoteCategory } from "../../types/note.type";
import IconButton from '@mui/material/IconButton';
import DeleteOutlined from '@mui/icons-material/DeleteOutlined';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { blue, green, pink, yellow } from '@mui/material/colors';

interface NoteCardProps {
  note: Note;
  handleDelete: (id: number) => Promise<void>;
}

const NoteCard = ({ note, handleDelete }: NoteCardProps) => {
  return (
    <div>
      <Card elevation={3}>
        <CardHeader
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={ note.title }
          subheader={ note.category }
          avatar= {
            <Avatar
              sx={{
                backgroundColor: () => {
                  let colour = "";
            
                  if (note.category === NoteCategory.WORK) {
                    colour = yellow[700];
                  } else if (note.category === NoteCategory.MONEY) {
                    colour = green[500];
                  } else if (note.category === NoteCategory.TODOS) {
                    colour = pink[500];
                  } else {
                    colour = blue[500];
                  }
            
                  return colour;
                }
              }}
            >{ note.category[0].toUpperCase() }</Avatar>
          }
        />

        <CardContent>
          <Typography variant="body2" color="textSecondary">
            { note.details }
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default NoteCard;
