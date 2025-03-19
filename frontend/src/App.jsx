

import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import CycleSense from './components/CycleSense';
import ModernLogin from './components/ModernLogin';
import Dashboard from './components/Dashboard';
import MenstruationQuiz from './components/MenstruationQuiz';
import Remedies from './components/Remedies';
import EducationalContent from './components/EducationalContent';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/" element={<CycleSense />} />
        <Route
          path="/login"
          element={<ModernLogin setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/quiz"
          element={isAuthenticated ? <MenstruationQuiz /> : <Navigate to="/login" />}
        />
        <Route
          path="/remedies"
          element={isAuthenticated ? <Remedies /> : <Navigate to="/login" />}
        />
         <Route
          path="/contents"
          element={isAuthenticated ? <EducationalContent /> : <Navigate to="/login" />}
        />
      </Routes>
      
    </>
  );
}

export default App;
