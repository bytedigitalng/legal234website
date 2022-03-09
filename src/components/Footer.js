import { Link } from 'react-router-dom';

export default function Footer(){
    return (
        <>
            <footer className="p-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="list-inline-item">
                                <Link to="/about">About</Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="/contact">Contact</Link>
                                </li>
                                
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul className="list-inline float-md-end">
                                <li className="list-inline-item">
                                    <Link to="#"><i className="fa-brands fa-facebook"></i></Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="#"><i className="fa-brands fa-linkedin"></i></Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="#"><i className="fa-brands fa-twitter"></i></Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="#"><i className="fa-brands fa-instagram"></i></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}