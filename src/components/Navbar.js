import { Link } from 'react-router-dom';
import logo from '../logo/logo.png';

export default function Navbar(){
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                <Link className="navbar-brand" to="/"><img src={logo} alt="Legal234Logo" /></Link>
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
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" data-bs-toggle="dropdown">
                                Services
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/get-legal-advice">Get Legal Advice</Link></li>
                                <li><Link className="dropdown-item" to="/meet-lawyers">Meet Lawyers</Link></li>
                                <li><Link className="dropdown-item" to="/make-affidavit">Make Affidavit</Link></li>
                                <li><Link className="dropdown-item" to="/notarize-documents">Notarize Document</Link></li>
                                <li><Link className="dropdown-item" to="/wind-down-company">Wind Down Company</Link></li>
                            </ul>
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