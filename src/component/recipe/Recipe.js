import React from 'react';
import { Redirect } from 'react-router-dom';
import API from '../../api/base';
import style from './css/recipe.module.css'

import { Container } from 'react-bootstrap';
import Navigation from '../navigation/Navigation';
import Loading from '../loading/Loading';
import Warning from '../warning/Warning';
import RecipeOverview from './RecipeOverview';
import RecipeIngredients from './RecipeIngredients';
import RecipeInstruction from './RecipeInstruction';
import Footer from '../navigation/Footer';

class Recipe extends React.Component {
    state = {
        keyword: '',
        responseStatus: '',
        recipe: {}
    }

    componentDidMount() {
        const recipeId = this.props.location.state.recipeId;
        API.get(`/recipes/${recipeId}/information`, {
            params: {
                apiKey: '276ec49dd63a481ba862b45990caa2dd',
                includeNutrition: false
            }
        })
            .then((response) => {
                this.setState({ responseStatus: response.status });
                this.setState({ recipe: response.data });
            })
            .catch((error) => console.log(error))
    }

    handleSearch = (keyword) => {
        this.setState({ keyword: keyword })
    }

    render() {
        let renderComponent = null;

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
        } else {
            if (this.state.responseStatus !== 200) {
                if(this.state.responseStatus === '') {
                    renderComponent = <Loading />
                } else {
                    renderComponent = <Warning />
                }
            
                return (
                    <Container fluid className={style.container}>
                        <Navigation onSubmit={this.handleSearch} />
                        {renderComponent}
                    </Container>
                )
            } else {
                let recipe = this.state.recipe;
                if (Object.keys(recipe).length === 0 && recipe.constructor === Object) {
                    console.log("gak ada data")
                    renderComponent = <p>Gak Ada</p>
                } else if (Object.keys(recipe).length > 0 && recipe.constructor === Object) {
                    renderComponent = renderComponent = (
                        <React.Fragment>
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
                        </React.Fragment>
                    )
                }

                return (
                    <Container fluid className={style.container} style={{ backgroundColor: '#dadada' }}>
                        <Navigation onSubmit={this.handleSearch} />
                        {renderComponent}
                        <Footer />
                    </Container>
                )
            }
        }
    }
}

export default Recipe;