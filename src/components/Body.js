import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { About, BookDetailsContainer, ContactContainer, HomeContainer } from '../components';
import '../styles/Body.scss'

function Body()
{
    return (
        <Container className="body">
            <Switch>
                <Route exact path="/" component={ HomeContainer } />
                <Route path="/about" component={ About } />
                <Route path="/contact" component={ ContactContainer } />
                <Route path="/book/:key/:id" component={ BookDetailsContainer } />
            </Switch>
        </Container>
    );
}

export default Body;