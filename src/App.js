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
            <p>My Name is Fritz Guerilus Jr. I am fulfilling my dream of becoming a Software Engineer and Web Developer. I've always been curious and as a result I've always been drawn to technology and creativity.</p>
            <p> Software Engineering allows me to combine technology and creativity in a way to satisfy my curiosity and to create web apps. One of the goals of my web apps is to create practical solutions to problems or the needs of people. If I can add some fun to the project, then I consider it a bonus. </p>
            <p>Software Engineering is a journey. So it's best not to stay stationary. I've learned the basics of HTML, CSS, and JavaScript. As I keep growing and learning I've expanded to MongoDB, EXPRESS, REACT, NODEJS. Technology will always improve and curiosity will always provide people the spark to use technology in great ways. And I want to be part of that journey. In the words of <span style={{ fontStyle: 'italic', fontWeight: 'bold', color: 'red' }}>Albert Einstein</span> - <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>"I have no special talents. I am only passionately curious"</span> </p>

          </div>
        </div>
      </div>
      <div className=' p-5' id='myprojects'>
        <div className="container">
          <h1 className='text-center'>Projects</h1>
          <div className='row g-3'>
            <div className='col-md-4'>
              <div className="card">
                <img src='./images/repair.png' alt="project image" className="card-img-top repair-img" />
                <div className="card-body">
                <Link to="https://buildinglogs-client.onrender.com" target="_blank" >
                    <h5 className="card-title"><strong>MrFritz Luxury Apartments Repair Requests</strong></h5>
                  </Link>
                  <p className="card-text">
                    <strong>Description: </strong>
                    <br />
                    This is a web app built on the MERN stack. It's a Fullstack application. This web app provides a quick and efficient way for residents of an apartment building to report any repair issues to management.
                    You can add comments to your repair ticket to keep track of it's status
                    You can also see all the service tickets that have been entered from other residents. Include sign up/login (authentication) functionality, with encrypted passwords & an authorization flow.
                    <br />
                    <strong>Technolgies Used: </strong> <ul>
                      <li>MERN stack: Node.js, MongoDB/Mongoose, Express and React.</li>
                      <li>Mongoose Models with full CRUD</li>
                      <li>REACT FrontEnd</li>
                      <li>MVC BackEnd structure</li>
                      <li>Axios, React Router, Local storage, and JWT tokens</li>
                    </ul>
                  </p>

                  <p className="card-footer text-center">
                  <Link to="https://buildinglogs-client.onrender.com" target="_blank" > <button  type="button" className="btn btn-primary">WEBSITE:</button> </Link>
                  </p>
                </div>
              </div>
            </div>

            {/* PROJECT2 */}
            <div className='col-md-4'>
              <div className="card">
                <img src='./images/superhero.png' alt="project image" className="card-img-top" />
                <div className="card-body">
                <Link to="https://master--strong-basbousa-98aece.netlify.app/" target="_blank" >
                    <h5 className="card-title"><strong>The Super Hero/Villian Website</strong></h5>
                  </Link>
                  <p className="card-text">
                    <strong>Description: </strong>
                    <br />
                    This a REACT application where you can lookup Super Heros/Villian information. While browsing the internet, I could only find Super Heros/Villian websites that were limited to a single comic book universe, DC-only, Marvel-only, etc. This website combines Super Heros/Villian Website from Marvel, DC and more!. The goal of this website is to make it to the number 1 site for all Super Heros/Villian information. The website is divided into 3 main Sections, HOME, SEARCH, FAVORITES <br />  
                    <strong>Technical Setup</strong> <br />
                    This website gathers data from 2 separate APIs.
                    The Favorites page stores the favorite characters in Local Storage of the browser <br />
                    <strong>Technolgies Used: </strong> <ul>
                      <li>REACT FrontEnd</li>
                      <li>External Third Party APIs: <br /><Link to="https://www.superheroapi.com/">SuperHero API</Link> <br /> <Link to="https://akabab.github.io/superhero-api/api">SuperHero API-AKABAB</Link></li>
                      <li>Multiple Functional Components & Pages</li>
                      <li>Fetch, Local storage, React Router</li>

                    </ul>
                  </p>
                  <p className="card-footer text-center">
                  <Link to="https://master--strong-basbousa-98aece.netlify.app/" target="_blank" > <button  type="button" className="btn btn-primary">WEBSITE:</button> </Link>
                  </p>
                </div>
              </div>
            </div>

            {/* PROJECT3 */}
            <div className='col-md-4'>
              <div className="card">
                <img src='./images/hangman.png' alt="project image" className="card-img-top repair-img" />
                <div className="card-body">
                  <Link to='https://mrfritzg.github.io/fg_hangman/' target="_blank">
                    <h5 className="card-title"><strong>Word Puzzle-Hangman</strong></h5>
                  </Link>
                  <p className="card-text">
                    <strong>Description: </strong>
                    It is a web app game for Hangman
It is built with HTML, CSS and Vanilla JavaScript .

# GamePlay:
This is a 2 player game, & uses the default names of Jeff & Stan. Future versions of the game will allow visitors to enter their own names

Each player has a chance to guess a letter for the missing Puzzle word.
There is a hint to help. A round consist of a player correctly guessing all of the missing letters. The results of each guess is labeled as "Good" or "Bad".

The round ends when a player either guesses all of the correct letters until the word is found or if they encounters a bad guess. If a player get's Bad guess they lose their turn and the next player gets a turn.
<br />
                    <strong>Technolgies Used: </strong> <ul>
                      <li>HTML, CSS and Vanilla JavaScript, DOM Manipulation</li>
                    </ul>
                  </p>
                  <p className="card-footer text-center">
                    <Link to="https://mrfritzg.github.io/fg_hangman/" target="_blank" > <button  type="button" className="btn btn-primary">WEBSITE:</button> </Link>
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
