import { Routes, Route } from 'react-router-dom';
import Banner from './Banner';
import Message from './Message';
import Navbar from './Navbar';
import PastExams from './pastExams';
import Home from './Home';
import Button2 from './Button2';
import Button3 from './Button3';
import Button4 from './Button4';
import GPAcalc from './GPAcalc';
import './App.css';
import { useState, useEffect } from "react";
  //useState allows you to create and update the state
  //useEffect lets you run code when the component loads

function App() {
  const [count, setCount] = useState (0);
  //creates a state variable named count (intialized to 0)
  //setCount updates the state variable
  //when setCount is called, React will automatically re-render to show correct value

  useEffect(() => {
  fetch("http://localhost:3003/count") // request to backend
    .then(res => res.json()) // converts the server’s response into JSON
    .then(data => setCount(data.count)) //updates count state with value from server
    .catch(err => console.error("Error fetching count:", err)); // error message if something goes wrong
  }, []);

  const handleIncrement = async () => { //when the button is clicked, calls function handleIncrement (marked async because it will use await)
    const res = await fetch("http://localhost:3003/increment", { //calls backend server (uses await) (fetch because it's POST)
      method: "POST", //asking server to update something
      headers: { "Content-Type": "application/json" } //data format JSON
    });
    const data = await res.json(); // value stored in variable "data"
    setCount(data.count); // update state
  };
  return (
    <div>
    <Message />
    <Navbar />
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
      <Routes>
        <Route path="/home" element={<Banner />} />
        <Route path="/home" element={<Home />} />
        <Route path="/past-exams" element={<PastExams />} />
        <Route path="/button-2" element={<Button2 />} />
        <Route path="/button-3" element={<Button3 />} />
        <Route path="/button-4" element={<Button4 />} />
        <Route path="/gpa-calc" element={<GPAcalc />} />
      </Routes>
    </div>
  );
}


export default App;