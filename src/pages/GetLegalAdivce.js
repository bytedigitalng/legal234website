import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import MoreLinks from "../components/MoreLinks";
import QuickContact from "../components/QuickContact";

export default function GetLegalAdvice(){
    let content = {
        'title': 'Get Legal Advice',
        'subtitle': 'Talk to us if you need legal advice',
        'class' : 'page-header-img'
    }

    return (
        <>
            <Navbar />
            <PageHeader data={content} />

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 p-4">
                        <p>Wth all the events going on, you will need a legal practitioner to talk to and help clarify certain legal issues.</p>
                        <p>Our team of lawyers are always available on standby to offer lagal advice with regards to every facet of human and business enterprice</p>
                    
                        <QuickContact />
                    </div>
                </div>
            </div>

            <MoreLinks />

            <Footer />
        </>
    )
}