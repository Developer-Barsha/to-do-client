import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import AddTask from "./Components/AddTask/AddTask";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/addTask" element={<AddTask/>} />
      </Routes>    
    </div>
  );
}

export default App;
