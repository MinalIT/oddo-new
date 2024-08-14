import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Application from './Application';
import Signin from './Signin';
import Contact from './Contact';
import Pricing from './pricing';
import Community from './community';
import Sale from './Sale';
import Finance from './Finance';
import Startfree from './Startfree';
import Rental from './Rental';
import Accounting from './Accounting';
import Knowledge from './Knowledge';
import Sign from './Sign';
import CRM from './CRM';
import Studio from './Studio';
import Subscriptions from './Subscriptions';
import Point from './Point';
import Discuss from './Discuss';
import Documents from './Documents';
import Project from './Project';
import Timesheets from './Timesheets';
import FieldService from './FieldService';
import Helpdesk from './Helpdesk';
import Planning from './Planning';
import EmailMarketing from './EmailMarketing';
import SocialMarketing from './SocialMarketing';
import Website from './Website';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Application" element={<Application />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Community" element={<Community />} />  
          <Route path="/Contact" element={<Contact />} />
           <Route path="/Pricing" element={<Pricing />} />
           <Route path="/Sale" element={<Sale />} />
           <Route path="/finance" element={<Finance/>} />
           <Route path="/Startfree" element={<Startfree/>} />
           <Route path="/Rental" element={<Rental/>} />
           <Route path="/Accounting" element={<Accounting/>} />
           <Route path="/Knowledge" element={<Knowledge/>} />
           <Route path="/Sign" element={<Sign/>} />
           <Route path="/CRM" element={<CRM/>} />
           <Route path="/Studio" element={<Studio/>} />
           <Route path="/Point" element={<Point/>} />
           <Route path="/Subscriptions" element={<Subscriptions/>} />
           <Route path="/Discuss" element={<Discuss/>} />
           <Route path="/Documents" element={<Documents/>} />
           <Route path="/Project" element={<Project/>} />
           <Route path="/Timesheets" element={<Timesheets/>} />
           <Route path="/FieldService" element={<FieldService/>} />
           <Route path="/Helpdesk" element={<Helpdesk/>} />
           <Route path="/Planning" element={<Planning/>} />
           <Route path="/EmailMarketing" element={<EmailMarketing/>} />
           <Route path="/SocialMarketing" element={<SocialMarketing/>} />
           <Route path="/Website" element={<Website/>} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
