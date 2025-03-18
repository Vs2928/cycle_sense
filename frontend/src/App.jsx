import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // Remove BrowserRouter from here
import './App.css';
import CycleSense from './components/CycleSense';
import ModernLogin from './components/ModernLogin';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        {/* Route for the main CycleSense page */}
        <Route path="/" element={<CycleSense />} />

        {/* Route for the ModernLogin page */}
        <Route path="/login" element={<ModernLogin />} />
      </Routes>
    </>
  );
}

export default App;