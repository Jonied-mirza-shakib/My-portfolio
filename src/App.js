import { Routes, Route } from "react-router-dom";
import './App.css';
import About from "./Component/About/About";
import Blog from "./Component/Blog/Blog";
import ContactUs from "./Component/ContactUs/ContactUs";
import Home from "./Component/Home/Home";
import Navbar from "./Component/Navbar/Navbar";
import Projects from "./Component/Projects/Projects";
import Skill from "./Component/Skill/Skill";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/skill' element={<Skill></Skill>}></Route>
        <Route path='/projects' element={<Projects></Projects>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/contact' element={<ContactUs></ContactUs>}></Route>
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
