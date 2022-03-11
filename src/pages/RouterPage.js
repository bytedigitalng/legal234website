import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Home from './Home';
import About  from './About';
import GetLegalAdvice from './GetLegalAdivce';
import MeetLawyer from './MeetLawyer';
import MakeAffidavit from './MakeAffidavit';
import NotarizeDocument from './NotarizeDocument';
import WindDownCompany from './WindDownCompany';
import StartCompany from './StartCompany';
import Contact from './Contact';

export default function RouterPage(){
    return (
        <>
            <Router>
                <ScrollToTop>
                    <Routes>
                        <Route path='/' exact element={<Home />} />
                        <Route path='/about' exact element={<About />} />
                        <Route path='/contact' exact element={<Contact />} />
                        <Route path='/get-legal-advice' exact element={<GetLegalAdvice />} />
                        <Route path='/make-affidavit' exact element={<MakeAffidavit />} />
                        <Route path='/meet-lawyers' exact element={<MeetLawyer />} />
                        <Route path='/notarize-documents' exact element={<NotarizeDocument />} />
                        <Route path='/wind-down-company' exact element={<WindDownCompany />} />
                        <Route path='/start-company' exact element={<StartCompany />} />
                    </Routes>
                </ScrollToTop>
            </Router>
        </>
    )
}