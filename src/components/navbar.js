import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <Link to="#" className="navbar-brand mb-0 h1">
                <img className="d-inline-block align-top" src="/logo192.png" /> NAVBAR
            </Link>
            <button type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" className="navbar-toggler" aria-controls="navbarNav" aria-expanded="false" aria-labeL="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="#" className="nav-link active">Projects</Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="#" className="nav-link active">Contact Me</Link>
                    </li>
                </ul>
            </div>

        </nav>
    )

}
