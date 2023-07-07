// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Navbar from './components/ice/Navbar';
import Registration from './components/pages/Registration';
import Support from './components/pages/Support';
import UserCreate from './components/pages/UserCreate';
import UserEdit from './components/pages/UserEdit.js';
import UserUpdate from './components/pages/UserUpdate';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/about" exact element={<About/>} />
        <Route path="/contact" exact element={<Contact/>} />
        <Route path="/Registration" exact element={<Registration/>} />
        <Route path="/Support" exact element={<Support/>} /> 
        <Route path="/usercreate" exact element={<UserCreate/>} /> 
        <Route path="/useredit/:empid" exact element={<UserEdit/>} /> 
        <Route path="/userUpdate/:empid" exact element={<UserUpdate/>} /> 
      </Routes>
    </Router>
    </>
  );
}
export default App;
