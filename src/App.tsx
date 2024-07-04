import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import NewsFeed from './components/NewsFeed';
import BreakingNewsFeed from './components/BreakingNewsFeed';
import WorldNewsFeed from "./components/WorldNewsFeed";
import BusinessNewsFeed from "./components/BusinessNewsFeed";
import ScienceNewsFeed from "./components/ScienceNewsFeed";
import SportNewsFeed from "./components/SportNewsFeed";

import Euro2024NewsFeed from "./components/Euro2024NewsFeed";

function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<NewsFeed/>}/>
                <Route path="/breaking-news" element={<BreakingNewsFeed/>}/>
                <Route path="/world-news" element={<WorldNewsFeed/>}/>
                <Route path="/business-news" element={<BusinessNewsFeed/>}/>
                <Route path="/science-news" element={<ScienceNewsFeed/>}/>
                <Route path="/sports-news" element={<SportNewsFeed/>}/>
            </Routes>
        </Router>
    );
}

export default App;
