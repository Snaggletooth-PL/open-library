import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../js/Header';
import Footer from '../js/Footer';
import '../scss/App.scss';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Header />

                <div className="container flex-grow-1 my-3">
                    <Switch>

                    </Switch>
                </div>

                <Footer />
            </Router>
        );
    }
}

export default App;