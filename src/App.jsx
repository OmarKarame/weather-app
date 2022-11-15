import './App.scss';
import Home from "./pages/Home/Home";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Routes path="/" element={<TodoList />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
