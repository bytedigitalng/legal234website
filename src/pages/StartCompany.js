import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import MoreLinks from "../components/MoreLinks";
import QuickContact from "../components/QuickContact";
import { Link } from "react-router-dom";

export default function StartCompany(){
    let content = {
        'title': 'Start a Business, Company or NGO',
        'subtitle': 'Make an appointment and meet oour lawyers',
        'class' : 'page-header-img'
    }

    return (
        <>
            <Navbar />

            <PageHeader data={content} />

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 p-4">
                        <p>Starting a legal entity (Business, Company, NGO) can be a haze when navigating the legal commitment, we are here to to help you get started with little stress.</p>
                        <p>With our partner site Ireg Services - <Link to="https://ireg.com.ng">https://ireg.com.ng</Link> you can start and get more than just your legal, but also your technological needs met.</p>
                        <p>Learn more about Ireg Services on <Link to="https://ireg.com.ng">https://ireg.com.ng</Link></p>
                        

                        <QuickContact />
                    </div>
                </div>
            </div>

            <MoreLinks />

            <Footer />
        </>
    )
}