import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import MoreLinks from "../components/MoreLinks";
import QuickContact from "../components/QuickContact";

export default function MeetLawyer(){
    let content = {
        'title': 'Meet Lawyers',
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
                        <p>We make it easy to meet a lawyer. With our phletora of lawyers available to meet both physically and virtually to attend to your pressing issues</p>
                        <p>If you have an issue and you need a lawyer to talk to to address your legal pain point, reach out. </p>
                        <p>With our lawyers specialized in various discipline : Commercial, transaction advisory, Litigation, Trademark and patent, Copyright, and technology</p>
                        
                        <QuickContact />
                    </div>
                </div>
            </div>

            <MoreLinks />

            <Footer />
        </>
    )
}