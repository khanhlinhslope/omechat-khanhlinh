import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TermsModal from './TermsModal';
import Chat from './Chat'; // Your chat component

const App = () => {
    const [isTermsModal, setIsTermsModal] = useState(true);

    return (
        <Router>
            <div>
                {isTermsModal && <TermsModal setIsTermsModal={setIsTermsModal} />}
                <Routes>
                    <Route path="/chat" element={<Chat />} />
                    {/* Other routes */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;