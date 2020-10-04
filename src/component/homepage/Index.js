import React from 'react';
import { Redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Navigation from '../navigation/Navigation';
import Welcome from './Welcome';
import Intro from './Intro';
import RandomRecipes from './RandomRecipes';
import Footer from '../navigation/Footer';

const styleContainer = {
    padding: 0,
    margin: 0
}

class Index extends React.Component {
    state = {
        keyword: ''
    }

    handleSearch = (keyword) => {
        this.setState({ keyword: keyword });
    }

    render() {
        if (this.state.keyword !== '') {
            return (
                <Redirect
                    to={{
                        pathname: "/search",
                        search: `q=${this.state.keyword}`,
                        state: { query: this.state.keyword }
                    }}
                />
            )
        }

        return (
            <Container style={styleContainer} fluid>
                <Navigation onSubmit={this.handleSearch} />
                <Welcome onSubmit={this.handleSearch}/>
                <Intro />
                <RandomRecipes />
                <Footer />
            </Container>
        )
    }
}

export default Index;