import { SxProps } from '@mui/system/styleFunctionSx';
import { Theme } from '@mui/material';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

const drawerWidth = 240;

const classes = {
  page: {
    backgroundColor: '#f9f9f9',
    width: '100%',
  } as SxProps<Theme>,
  drawer: {
    width: drawerWidth,
  } as SxProps<Theme>,
  root: {
    display: 'flex',
  } as SxProps<Theme>,
};

const drawerTheme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: drawerWidth,
        },
      }
    }
  }
})

interface LayoutProps {
  children: JSX.Element
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Typography
      component="div"
      sx={classes.root}
    >
      {/* app bar */}
      {/* side drawer */}

      <ThemeProvider theme={drawerTheme}>
        <Drawer
          sx={classes.drawer}
          variant="permanent"
          anchor="left"
        >
          <div>
            <Typography variant="h5">
              ninja notes
            </Typography>
          </div>
        </Drawer>
      </ThemeProvider>

      <Typography
        component="div"
        sx={classes.page}
      >
        { children }
      </Typography>
    </Typography>
  )
}

export default Layout;
