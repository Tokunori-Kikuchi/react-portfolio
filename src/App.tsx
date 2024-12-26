import './App.css';
import './css/reset.css';
import './css/style.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FirstView from './components/FirstView';
import ServicePage from './components/ServicePage';
import WorksPage from './components/WorksPage';
import AboutPage from './components/AboutPage';
import WorkFlowPage from './components/WorkFlowPage';
import MessagePage from './components/MessagePage';
import ContactPage from './components/ContactPage';

const App: React.FC = ()=> {
  return (
    <Router>
      <div className="App">
        <div className="wrapper">
          <Header />

          <main className="main">
            <FirstView />
            <ServicePage />
            <WorksPage />
            <AboutPage />
            <WorkFlowPage />
            <MessagePage />
            <ContactPage />

            {/*<Routes>
              <Route path="/blog" element={<BlogPage />} />
            </Routes>*/}

            <Footer />
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
