import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useState } from 'react';

export default function App() {
  const [formType, setFormType] = useState('login');

  const handleSwitchForm = (newFormType) => {
    setFormType(newFormType);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            formType === 'login' ? (
              <Login onSwitchForm={handleSwitchForm} />
            ) : (
              <Signup onSwitchForm={handleSwitchForm} />
            )
          }
        />
      </Routes>
    </Router>
  );
}
