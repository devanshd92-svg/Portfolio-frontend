import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "../Layouts";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Project from "../pages/Project";
// import Footer from "../pages/Footer";



function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/Project" element={<Project />} />
       
          
        </Route>
      </Routes>
      {/* <Footer/> */}
    </>
  );
}

export default App;