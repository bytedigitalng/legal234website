import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import MoreLinks from "../components/MoreLinks";
import QuickContact from "../components/QuickContact";

export default function WindDownCompany(){
    let content = {
        'title': 'Wind Down Company',
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
                        <p>Leaving a legal entity (Business, Company, NGO) dormant without winding down after it ends will inccur serveral fees (Taxes, Levy and more) as long as it is still officially active.</p>
                        <p>We can help with the process of winding down your business and officially bringing it to a close and prevent unneccessary fees and charges.</p>
                        
                        <QuickContact />
                    </div>
                </div>
            </div>

            <MoreLinks />

            <Footer />
        </>
    )
}