import { Link } from 'react-router-dom';

export default function Navbar(){
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                <a className="navbar-brand" href="#"><img src="../../public/images/logo.png" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to='/' className="nav-link active">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link to='/about' className="nav-link active">About</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                    <Link to='/contact' className="nav-link active">Contact</Link>
                    </li>
                    </ul>
                    <span className="navbar-text">
                    info@legal234.com
                    </span>
                </div>
                </div>
            </nav>
        </>
    )
}