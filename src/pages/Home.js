import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Home(){
    return (
        <div>
            
            <Navbar />

            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-md-8 p-5">
                        <div className="row align-items-center">
                            <div className="col p-5 text-center">
                                <h1>Providing legal and notary service for all your needs</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid box">
                <div className="row">
                    <div className="col-md-6 p-5 legal-bg-1">
                        <div className="row align-items-center p-5">
                            <div className="col p-5 text-center">
                                <Link to="get-legal-advice">Get Legal Advice</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 p-5 legal-bg-2">
                        <div className="row align-items-center p-5">
                            <div className="col p-5 text-center">
                                <Link to="meet-lawyers">Meet Lawyers</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 p-5 legal-bg-3">
                        <div className="row align-items-center p-5">
                            <div className="col p-5 text-center">
                                <Link to="make-affidavit">Make Affidavit</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 p-5 legal-bg-4">
                        <div className="row align-items-center p-5">
                            <div className="col p-5 text-center">
                                <Link to="notarize-documents">Notarize Documents</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 p-5 legal-bg-3">
                        <div className="row align-items-center p-5">
                            <div className="col p-5 text-center">
                                <Link to="start-company">Start Company</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 p-5 legal-bg-4">
                        <div className="row align-items-center p-5">
                            <div className="col p-5 text-center">
                                <Link to="wind-down-company">Wind Down Company</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}


export default Home;