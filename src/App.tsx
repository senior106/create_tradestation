import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Trade from './pages/Trade';
import NotFound from './pages/NotFound';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/trade" element={<Trade />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
