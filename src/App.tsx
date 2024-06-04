import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import NewsFeed from './components/NewsFeed';
import BreakingNewsFeed from './components/BreakingNewsFeed';
import WorldNewsFeed from "./components/WorldNewsFeed";

function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<NewsFeed/>}/>
                <Route path="/breaking-news" element={<BreakingNewsFeed/>}/>
                <Route path="/world-news" element={<WorldNewsFeed/>}/>
            </Routes>
        </Router>
    );
}

export default App;
