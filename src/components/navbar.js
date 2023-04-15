import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <div className="container">
            <Link to="#" 
            className="navbar-brand mb-0 h1">
                <img 
                className="d-inline-block align-top pagelogo" 
                src="/logo192.png"  alt="logo.png"/>
            </Link>
            <button 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            className="navbar-toggler" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto nav-pills">
                    <li className="nav-item active">
                        <Link to="#" className="nav-link">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#" className="nav-link">Contact</Link>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
        
    )

}
