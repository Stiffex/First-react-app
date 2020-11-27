import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

function App() {
    return (
        <div className="container">
            <div className="all">
                <Header />
                <MainContent />
                <Footer />
            </div>
        </div>
    );
}

export default App;