import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <footer className="m-3">
                <div className="container px-3 py-0 text-center">
                    <Link to="http://facebook.com">
                        <i className="fa fa-facebook fa-lg  me-5 me-3 fa-2x"></i>
                    </Link>
                    <Link to="https://www.linkedin.com/in/fritz-guerilus-jr-061a9311/">
                        <i class="fa fa-linkedin fa-lg white-text me-5 me-3 fa-2x"></i>
                    </Link>
                    <Link to="https://github.com/mrfritzg">
                        <i className="fa fa-github fa-lg white-text me-5 fa-2x"></i>
                    </Link>
                    <Link to="mailto:mrfritz@gmail.com">
                        <i className="fa fa-envelope fa-lg white-text me-5 fa-2x"></i>
                    </Link>
                </div>
                <div className="my-2">
                    <p className="fw-bold text-center px-5 py-0">
                        &copy; 2023-2024 Copyright: Created By: MRFRITZG
                    </p>
                </div>
            </footer>
        </>
    )
}