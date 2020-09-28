import React from 'react';
import {Container} from 'react-bootstrap';

import Navigation from '../navigation/Navigation';
import Welcome from './Welcome';
import Intro from './Intro';
import RandomRecipes from './RandomRecipes';

const Index = () => {
    const styleContainer = {
        padding: 0,
        margin: 0
    }

    return (
        <Container style={styleContainer} fluid>
            <Navigation />
            <Welcome />
            <Intro />
            <RandomRecipes/>
        </Container>
    )
}

export default Index;