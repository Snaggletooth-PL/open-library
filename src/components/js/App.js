import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Header from '../js/Header';
import Body from '../js/Body';
import Footer from '../js/Footer';
import '../scss/App.scss';

class App extends React.Component {
    render() {
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