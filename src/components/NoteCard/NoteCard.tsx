import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Note } from "../../types/note.type";
import IconButton from '@mui/material/IconButton';
import DeleteOutlined from '@mui/icons-material/DeleteOutlined';
import Typography from '@mui/material/Typography';

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
