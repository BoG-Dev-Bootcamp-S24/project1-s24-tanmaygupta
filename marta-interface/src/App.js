import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LinesPages from './pages/LinesPage';
import HomePage from './pages/HomePage';
import AboutMarta from './pages/AboutMarta';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutMarta />} />
        <Route path='linespage'>
          <Route path="gold" element={<LinesPages line="gold" />} />
          <Route path="red" element={<LinesPages line="red" />} />
          <Route path="blue" element={<LinesPages line="blue" />} />
          <Route path="green" element={<LinesPages line="green" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
