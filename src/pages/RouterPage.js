import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import About  from './About';
import GetLegalAdvice from './GetLegalAdivce';
import MeetLawyer from './MeetLawyer';
import MakeAffidavit from './MakeAffidavit';
import NotarizeDocument from './NotarizeDocument';
import Contact from './Contact';



export default function RouterPage(){
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' exact element={<Home />} />
                    <Route path='/about' exact element={<About />} />
                    <Route path='/contact' exact element={<Contact />} />
                    <Route path='/get-legal-advice' exact element={<GetLegalAdvice />} />
                    <Route path='/make-affidavit' exact element={<MakeAffidavit />} />
                    <Route path='/meet-lawyers' exact element={<MeetLawyer />} />
                    <Route path='/notarize-documents' exact element={<NotarizeDocument />} />
                </Routes>
            </Router>
        </>
    )
}