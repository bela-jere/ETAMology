import { Routes, Route } from 'react-router-dom';
import Banner from './Banner';
import Message from './Message';
import Navbar from './Navbar';
import PastExams from './pastExams';
import Home from './Home';
import Button2 from './Button2';
import Button3 from './Button3';
import Button4 from './Button4';
import Button5 from './Button5';


import './App.css';

function App() {
  return (
    <div>
      <Message />
      <Navbar />
      <Routes>
        <Route path="/home" element={<Banner />} />
        <Route path="/home" element={<Home />} />
        <Route path="/past-exams" element={<PastExams />} />
        <Route path="/button-2" element={<Button2 />} />
        <Route path="/button-3" element={<Button3 />} />
        <Route path="/button-4" element={<Button4 />} />
        <Route path="/button-5" element={<Button5 />} />
      </Routes>
    </div>
  );
}

//button 1: Info page on navigating Howdy- static page 
// FAQ
// 

export default App;