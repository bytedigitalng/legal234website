import { Link } from "react-router-dom";


export default function MoreLinks(){
    return (
        <>
            <div className="container-fluid bg-brandblue">
                <div className="row justify-content-center py-5">
                    <div className="col-md-8 p-4">
                        <div className="row justify-content-center">
                            <div className="col-md-9 text-center">
                                <h3 className="py-4 text-white">More Services</h3>
                                <ul className="list-inline">
                                    <li className="list-inline-item"><Link className="morelink" to="/get-legal-advice">Get Legal Advice</Link></li>
                                    <li className="list-inline-item"><Link className="morelink" to="/meet-lawyers">Meet Lawyers</Link></li>
                                    <li className="list-inline-item"><Link className="morelink" to="/make-affidavit">Make Affidavit</Link></li>
                                    <li className="list-inline-item"><Link className="morelink" to="/notarize-documents">Notarize Document</Link></li>
                                    <li className="list-inline-item"><Link className="morelink" to="/Start-company">Start a Business/Company/NGO</Link></li>
                                    <li className="list-inline-item"><Link className="morelink" to="/wind-down-company">Wind Down Company</Link></li>
                                </ul>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}