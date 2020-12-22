import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import BookDetails from './BookDetails';
import '../styles/Body.scss'

function Body()
{
    return (
        <div className="body container">
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route path="/about" component={ About } />
                <Route path="/contact" component={ Contact } />
                <Route path="/book/:key/:id" component={ BookDetails } />
            </Switch>
        </div>
    );
}

export default Body;