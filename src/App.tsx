import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import NewsFeed from './components/NewsFeed';
import BreakingNewsFeed from './components/BreakingNewsFeed';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<NewsFeed />} />
                <Route path="/breaking-news" element={<BreakingNewsFeed />} />
            </Routes>
        </Router>
    );
}

export default App;
