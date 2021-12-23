import { SxProps } from '@mui/system/styleFunctionSx';
import { Theme } from '@mui/material';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SubjectOutlined from '@mui/icons-material/SubjectOutlined';
import AddCircleOutlined from '@mui/icons-material/AddCircleOutlined';
import { useLocation, useNavigate } from 'react-router';

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
  active: {
    background: '#f4f4f4',
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
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      text: 'My Notes',
      icon: <SubjectOutlined color="secondary" />,
      path: '/',
    },
    {
      text: 'Create Notes',
      icon: <AddCircleOutlined color="secondary" />,
      path: '/create',
    }
  ];

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

          {/* list / Links */}
          <List>
            {menuItems.map(item => (
              <ListItemButton
                key={item.text}
                onClick={() => navigate(item.path)}
                sx={location.pathname === item.path ? classes.active : {}}
              >
                <ListItemIcon>{ item.icon }</ListItemIcon>
                <ListItemText primary={ item.text } />
              </ListItemButton>
            ))}
          </List>
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
