import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Body, Footer, Header } from '../components';
import '../styles/App.scss';

function App()
{
    return (
        <Router basename="/open-library">
            <Header />
            <Body />
            <Footer />
        </Router>
    );
}

export default App;