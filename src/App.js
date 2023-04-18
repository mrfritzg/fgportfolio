import { Link } from "react-router-dom";
// import logo from './logo.svg';
// import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/navbar';

function App() {
  return (
    <div>
      <Navbar />
      <div className='masthead'> </div>
      <div className='color-overlay text-center'>
        <h1 className='introText'>Fritz Guerilus Jr.</h1>
        <h2 className='introText'>Software Engineer / Web Developer</h2>
      </div>
      <div className=' p-5 aboutMe'>
        <h1 className='text-center'>About Me</h1>
        <div className='row g-4'>
          <div className='col-md-3'>
            <img className='mypic' src='./images/fritzimage2.jpeg' alt='picture of fritz' />
          </div>
          <div className='col-md-9'>
            <h3 className=" text-center">Hello and Welome To My Portfolio Site</h3>
            <p>My Name is Fritz Guerilus Jr. I am fulfilling my dream of becoming a Software Engineer and Web Developer. I've always been curious and as result I've always been drawn to technology and creativity.</p>
            <p> Software Engineering allows me to combine technology and creativity in a way to satisfy my curiosity and to create web apps. One of the goals of my web apps is to create practical solutions to problems or the needs of people. If I can add some fun to the project, then I consider it a bonus. </p>
            <p>Software Engineering is a journey. So it's best not to stay stationary. I've learned the basics of HTML, CSS, and JavaScript. As I keep growing and learning I've expanded to MongoDB, EXPRESS, REACT, NODEJS. Technology will always improve and curiousity will always provide people the spark to use technology in great ways. And I want to be part of that journey. In the words of <span style={{fontStyle:'italic', fontWeight:'bold', color:'red'}}>Albert Einstein</span> - <span style={{fontStyle:'italic', fontWeight:'bold'}}>"I have no special talents. I am only passionately curious"</span> </p>
          </div>
        </div>
        </div>
        <div className=' p-5 myprojects'>
          <div className="container">
        <h1 className='text-center'>Projects</h1>
        <div className='row g-3 myprojects'>
          <div className='col-md-4'>
            <div className="card">
            <img src='#' alt="project image" className="card-img-top repair-img"  />
              <div className="card-body">
                <Link to='#'>
                  <h5 className="card-title"><strong>Project Title1</strong></h5>
                </Link>
                <p className="card-text">
                  <strong>Description: </strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo reprehenderit ex quo maxime atque distinctio quia esse similique magnam tempore, sit iure in perferendis nihil adipisci sed repellendus. Eum magni totam nisi ab suscipit sunt, necessitatibus laboriosam id nulla provident libero accusantium quae? Nam, esse harum molestiae tempora voluptates repellat!
                </p>
                <p className="card-footer">
                  <strong>PUT BUTTON: </strong>
                </p>
              </div>
            </div>
          </div>

          {/* PROJECT2 */}
          <div className='col-md-4'>
            <div className="card">
            <img src='#' alt="project image" className="card-img-top repair-img"  />
              <div className="card-body">
                <Link to='#'>
                  <h5 className="card-title"><strong>Project Title2</strong></h5>
                </Link>
                <p className="card-text">
                  <strong>Description: </strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo reprehenderit ex quo maxime atque distinctio quia esse similique magnam tempore, sit iure in perferendis nihil adipisci sed repellendus. Eum magni totam nisi ab suscipit sunt, necessitatibus laboriosam id nulla provident libero accusantium quae? Nam, esse harum molestiae tempora voluptates repellat!
                </p>
                <p className="card-footer">
                  <strong>PUT BUTTON: </strong>
                </p>
              </div>
            </div>
          </div>

          {/* PROJECT3 */}
          <div className='col-md-4'>
            <div className="card">
            <img src='#' alt="project image" className="card-img-top repair-img"  />
              <div className="card-body">
                <Link to='#'>
                  <h5 className="card-title"><strong>Project Title3</strong></h5>
                </Link>
                <p className="card-text">
                  <strong>Description: </strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo reprehenderit ex quo maxime atque distinctio quia esse similique magnam tempore, sit iure in perferendis nihil adipisci sed repellendus. Eum magni totam nisi ab suscipit sunt, necessitatibus laboriosam id nulla provident libero accusantium quae? Nam, esse harum molestiae tempora voluptates repellat!
                </p>
                <p className="card-footer">
                  <strong>PUT BUTTON: </strong>
                </p>
              </div>
            </div>
          </div>


        </div>
        </div>
        </div>

    </div>
  );
}

export default App;
