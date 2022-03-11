import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import MoreLinks from "../components/MoreLinks";

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
                        <p>We are a legal firm that is focused on help individuals and businesses navigate the complicated world of legal matters. With many years of experience and collaboration with other supporting services, we are equiped to assist you in all your legal needs.</p>
                        <p>Our mission id to provide legal services to everyone in need irrespective of location or time. We are alwasy avilable to listen and meet all your needs.</p>
                        <p>Have a look at our range of services and get in touch with us if you have any specific needs.</p>
                    </div>
                </div>
            </div>

            <MoreLinks />

            <Footer />
        </>
    )
}