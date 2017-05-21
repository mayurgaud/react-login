import React from 'react';
import {Jumbotron, Button} from 'react-bootstrap';

/**
 * Home Page.
 * @constructor
 */
const Home = () =>
    (
        <Jumbotron>
            <h1>Home Page</h1>
            <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured
                content or information.</p>
            <p><Button bsStyle="primary">Learn more</Button></p>
        </Jumbotron>
    );

export default Home;