import './App.scss';
import Home from "./pages/Home/Home";
import Nav from './components/Nav/Nav';
import TodoList from './pages/TodoList/TodoList';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todoList" element={<TodoList />} />
      </Routes>
    </Router>
  );
}

export default App;
