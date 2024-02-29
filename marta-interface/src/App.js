import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LinesPages from './pages/LinesPage';

function App() {
  return (
      <div className="App">
        
        <LinesPages />
      </div>
  );
}

export default App;
