import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Start from './components/Start';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Profile from './components/Profile';
import Counts from './components/Counts';
import ChangePassword from './components/ChangePassword';
import ChangeName from './components/ChangeName';
import ChangeLogin from './components/ChangeLogin';
import RectangleArea from './components/RectangleArea';
import ParalVolume from './components/ParalVolume';
import RoundLength from './components/RoundLength';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/counts" element={<Counts />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/changename" element={<ChangeName />} />
        <Route path="/changelogin" element={<ChangeLogin />} />
        <Route path="/rectangle" element={<RectangleArea />} />
        <Route path="/parallel" element={<ParalVolume />} />
        <Route path="/round" element={<RoundLength />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App
