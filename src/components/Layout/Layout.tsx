import { SxProps } from '@mui/system/styleFunctionSx';
import { Theme } from '@mui/material';
import Typography from '@mui/material/Typography';

const classes = {
  page: {
    backgroundColor: '#f9f9f9',
    width: '100%',
  } as SxProps<Theme>,
};

interface LayoutProps {
  children: JSX.Element
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      {/* app bar */}
      {/* side drawer */}
      <Typography
        sx={classes.page}
      >
        { children }
      </Typography>
    </div>
  )
}

export default Layout;
