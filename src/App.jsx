// src/App.js
import  { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Craft from './pages/Craft';
import AddCraft from './pages/AddCraft';
import MyCraft from './pages/MyCraft';
import Login from './pages/Login';
import { useTheme } from './page/ThemeContext/ThemeContext';

const App = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/craft" element={<Craft />} />
        <Route path="/addcraft" element={<AddCraft />} />
        <Route path="/mycraft" element={<MyCraft />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
