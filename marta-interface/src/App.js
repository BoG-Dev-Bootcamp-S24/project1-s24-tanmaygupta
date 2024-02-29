import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LinesPages from './pages/LinesPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='linespage'>
          <Route path="gold" element={<LinesPages />} />
          <Route path="red" element={<LinesPages />} />
          <Route path="blue" element={<LinesPages />} />
          <Route path="green" element={<LinesPages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
