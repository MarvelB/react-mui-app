import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notes from './components/Notes/Notes';
import Create from './components/Create/Create';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Notes />} />
        <Route path='/create' element={<Create />} />
      </Routes>
    </Router>
  );
}

export default App;
