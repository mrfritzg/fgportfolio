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
      <div className='container'>
        <h1 className='text-center'>About Me</h1>
        <div className='row g-4'>
          <div className='col-md-3'>
            <img className='mypic' src='./images/fritzimage2.jpeg' alt='picture of fritz' />
          </div>
          <div className='col-md-9'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, voluptatum dolores doloremque aspernatur impedit animi magnam ut suscipit sunt, itaque magni, quibusdam in praesentium laboriosam minima optio facilis atque? Labore deleniti magnam eum, nisi id eaque iusto voluptatem soluta culpa, maxime porro! Facere praesentium fugiat accusamus quis ab consequatur temporibus?</p>
          </div>
        </div>
        <h1 className='text-center'>Projects</h1>
        <div className='row g-3'>
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
  );
}

export default App;
