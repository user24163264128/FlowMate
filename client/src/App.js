import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import InboxPage from './features/inbox/InboxPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<InboxPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
