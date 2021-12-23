import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notes from './components/Notes/Notes';
import Create from './components/Create/Create';
import { createTheme, ThemeProvider } from "@mui/material";
import { purple } from "@mui/material/colors";
import Layout from './components/Layout/Layout';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fefefe',
    },
    secondary: purple
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Notes />} />
            <Route path='/create' element={<Create />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
