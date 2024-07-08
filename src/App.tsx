import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import NewsFeed from "./components/NewsFeed";
import BreakingNewsFeed from "./components/BreakingNewsFeed";
import WorldNewsFeed from "./components/WorldNewsFeed";
import BusinessNewsFeed from "./components/BusinessNewsFeed";
import ScienceNewsFeed from "./components/ScienceNewsFeed";
import SportNewsFeed from "./components/SportNewsFeed";
import LawNewsFeed from "./components/LawNewsFeed";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import EducationNewsFeed from "./components/EducationNewsFeed";
import Page from "./crawData";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                {/* <Route path="/" element={<NewsFeed />} />
                <Route path="/breaking-news" element={<BreakingNewsFeed />} />
                <Route path="/world-news" element={<WorldNewsFeed />} />
                <Route path="/business-news" element={<BusinessNewsFeed />} />
                <Route path="/science-news" element={<ScienceNewsFeed />} />
                <Route path="/sports-news" element={<SportNewsFeed />} />
                <Route path="/law-news" element={<LawNewsFeed />} />
                <Route path="/education-news" element={<EducationNewsFeed />} /> */}
            </Routes>
            <Page url="24h.com.vn/upload/rss/phithuongkyquac.rss"></Page>
            <Footer />
            <ScrollToTop />
        </Router>
    );
}

export default App;
