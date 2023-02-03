import './App.css';
import { Routes, Route } from "react-router-dom"
import Livestream from './components/Livestream';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Livestream />} />
      </Routes>
    </div>
  );
}

export default App;
