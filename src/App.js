import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import AddTask from "./Components/Task/AddTask";
import Login from "./Components/Login";
import { ToastContainer} from 'react-toastify';
// import RequireAuth from './Shared/RequireAuth';

function App() {
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/addTask" element={<AddTask/>} />
        {/* <Route path="/addTask" element={<RequireAuth><AddTask/></RequireAuth>} /> */}
        <Route path="/login" element={<Login/>} />
        
      </Routes>    
    </div>
  );
}

export default App;
