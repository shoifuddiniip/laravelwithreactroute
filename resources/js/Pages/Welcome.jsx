import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import QuoteOfTheDay from './component/QuoteOfTheDay';

const Welcome = () => {
    return (
        <Router>
            <Routes>
                <Route path="/qotd" exact element={<QuoteOfTheDay />} />
                <Route path="/new" exact element={<div>new</div>} />
                <Route path="/other" exact element={<div>this is other route</div>} />
            </Routes>
        </Router>
    );
};

export default Welcome;