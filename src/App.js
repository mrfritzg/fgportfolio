// import logo from './logo.svg';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/navbar';
import Projects from "./pages/projects";
import Contact from "./pages/Contact";
import Footer from "./components/footer";
import Success from './pages/Success';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='contact' element={<Contact />} />
        <Route path='/' element={<Projects />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/success' element={<Success />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
