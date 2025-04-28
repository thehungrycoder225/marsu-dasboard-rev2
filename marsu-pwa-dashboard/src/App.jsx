// import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Academics from './pages/Academics/Academics';
import Researches from './pages/Research/Research';
import Login from './pages/Login/Login';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/academics' element={<Academics />} />
      <Route path='/researches' element={<Researches />} />
    </Routes>
  );
}

export default App;
