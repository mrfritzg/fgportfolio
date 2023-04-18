// import logo from './logo.svg';
// import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/navbar';

function App() {
  return (
    <div>
      <Navbar />
      <div className= 'masthead'> 
      {/* <img className="d-flex justify-content-center align-items-center" src="/images/image_hero.jpg" alt="" /> */}
      </div>
        <div className='color-overlay text-center'>
          <h1 className='introText'>Fritz Guerilus Jr.</h1>
          <h2 className='introText'>Software Engineer / Web Developer</h2>

        </div>
      
      </div>
  );
}

export default App;
