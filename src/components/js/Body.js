import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../js/Home';
import About from '../js/About';
import Contact from '..//js/Contact';
import '../scss/Body.scss'

class Body extends React.Component {
    render() {
        return (
            <div className="body container">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </div>
        );
    }
}

export default Body;