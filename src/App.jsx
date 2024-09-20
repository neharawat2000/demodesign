import logo from './logo.svg';
import './App.css';
import Overview from './Page/Overview';
import {Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
        <Route path="/application/overview" element={<Overview />} />
        <Route path="/" element={<Overview />} />
    </Routes>
  );
}

export default App;
