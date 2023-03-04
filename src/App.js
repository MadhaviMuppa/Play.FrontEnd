import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Inventory from './Components/Inventory';
import Catalog from './Components/Catalog';
import LayOut from './Components/LayOut';
import{ BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayOut />} />
          <Route path="Catalog" element={<Catalog />} />
          <Route path="Inventory" element={<Inventory />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
