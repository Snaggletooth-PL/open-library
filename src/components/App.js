import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import '../styles/App.scss';

class App extends React.Component
{
    render()
    {
        return (
            <Router basename="/open-library">
                <Header />
                <Body />
                <Footer />
            </Router>
        );
    }
}

export default App;