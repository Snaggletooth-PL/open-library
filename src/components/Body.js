import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { About, Contact, Home } from '../components';
import '../styles/Body.scss'

function Body()
{
    return (
        <div className="body container">
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route path="/about" component={ About } />
                <Route path="/contact" component={ Contact } />
            </Switch>
        </div>
    );
}

export default Body;