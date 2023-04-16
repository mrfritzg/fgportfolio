// import logo from './logo.svg';
// import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/navbar';

function App() {
  return (
    <div>
      <Navbar />
      <div className='row'>
      <div className='col-sm-4 color-overlay d-flex justify-content-center align-items-center'>
          <h1>Hello World!</h1>
        </div>
      <div className= 'col-sm-8 masthead'>     
      </div>
      </div>
    </div>
  );
}

export default App;
