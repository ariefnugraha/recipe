import React from 'react';
import {Redirect} from 'react-router-dom';
import API from '../../api/base';

import { Container } from 'react-bootstrap';
import Navigation from '../navigation/Navigation';
import RecipeOverview from './RecipeOverview';
import RecipeIngredients from './RecipeIngredients';
import RecipeInstruction from './RecipeInstruction';
import RecipeSimiliar from './RecipeSimiliar';

const styleContainer = {
    padding: 0,
    backgroundColor: '#e8e8e8',
    minHeight: '100vh'
}

class Recipe extends React.Component {
    state = {
        keyword: '',
        recipe: []
    }

    componentDidMount() {
        const recipeId = this.props.location.state.recipeId;
        API.get(`/recipes/${recipeId}/information`, {
            params: {
                apiKey: '276ec49dd63a481ba862b45990caa2dd',
                includeNutrition: false
            }
        })
            .then((response) => this.setState({ recipe: response.data }))
            .catch((error) => console.log(error))
    }

    handleSearch = (keyword) => {
        this.setState({ keyword: keyword })
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
        } else if (this.state.recipe.length === 0) {
            return (
                <Container fluid style={styleContainer}>
                    <Navigation />
                </Container>
            )
        } else {
            return (
                <Container fluid style={styleContainer}>
                    <Navigation onSubmit={this.handleSearch} />
                    <RecipeOverview
                        title={this.state.recipe.title}
                        summary={this.state.recipe.summary}
                        pricePerServing={this.state.recipe.pricePerServing} time={this.state.recipe.readyInMinutes}
                        image={this.state.recipe.image}
                        servings={this.state.recipe.servings}
                        source={this.state.recipe.sourceURL}
                    />
                    <RecipeIngredients
                        ingredients={this.state.recipe.extendedIngredients}
                    />
                    <RecipeInstruction instruction={this.state.recipe.instructions} />
                    <RecipeSimiliar recipeId={this.props.location.state.recipeId} />
                </Container>
            )
        }
    }
}

export default Recipe;