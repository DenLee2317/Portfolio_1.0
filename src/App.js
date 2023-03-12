import "./styles/main.css"
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar"
   
    import Home from './pages/Home';
     import Project from "./pages/Project";
      import Contacts from "./pages/Contacts";
       import Separate_project from "./pages/Separate_project";
        import Footer from "./components/footer/Footer"
         import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
   <div className="App">
   <Router>
   <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/project" element= {<Project/>} />
        <Route path="/SEPARATE_PROJECT/:id" element= {<Separate_project/>} />
        <Route path="/contacts" element= {<Contacts/>} />
      </Routes> 
      <Footer/>
   </Router>

  </div>
  );
}

export default App;
