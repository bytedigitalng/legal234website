export default function Footer(){
    return (
        <>
            <footer className="p-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <a href="#">Home</a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">About</a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">Services</a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">Contact</a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">Privacy Policy</a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">Disclaimer</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul className="list-inline float-md-end">
                                <li className="list-inline-item">
                                    <a href="#"><i className="fa-brands fa-facebook"></i></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}