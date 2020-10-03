import React, { useState, useEffect } from 'react';
import API from '../../api/base';
import { Link } from 'react-router-dom';
import style from './css/searchresult.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUser, faMoneyBillAlt } from '@fortawesome/free-regular-svg-icons';
import { Row, Col } from 'react-bootstrap';

import Loading from '../loading/Loading';
import NotFound from '../notfound/NotFound';

const SearchResult = ({ query }) => {
    const [recipes, setRecipes] = useState([]);
    const [responseStatus, setResponseStatus] = useState('');

    useEffect(() => {
        API.get('/recipes/complexSearch', {
            params: {
                apiKey: '276ec49dd63a481ba862b45990caa2dd',
                query: query,
                instructionRequired: true,
                addRecipeInformation: true,
                number: 5,
                sort: 'popularity'
            }
        })
            .then((response) => {
                setResponseStatus(response.status)
                setRecipes(response.data.results)
            })
            .catch((error) => console.log(error));
    }, [query])

    let renderContent = null
    let renderRecipes = null;

    if (recipes.length === 0) {
        renderContent = <NotFound />
    } else if (recipes.length > 0) {
        renderRecipes = recipes.map((recipe) => {
            const rupiahRate = 15000;
            const servings = recipe.servings;
            const summary = recipe.summary.substr(0, 300)
            let price = recipe.pricePerServing.toString();
            let newPrice = `${price.substr(0, 2)}.${price.substr(2, 2)}`;
            let parsePriceToInt = parseInt(newPrice);
            let finalPricePerPerson = Math.ceil(parsePriceToInt * rupiahRate);
            let finalPricePerServing = Math.ceil(parsePriceToInt * rupiahRate * servings);
            let finalPricePerServingDollar = parsePriceToInt * servings;

            return (
                <div className={style.recipeItem} key={recipe.id}>
                    <Row>
                        <Col xs={3} sm={3} md={3} lg={3} xl={3} className={style.imageContainer}>
                            <Link to={{
                                pathname: '/recipe',
                                search: `?id=${recipe.id}`,
                                state: { recipeId: recipe.id }
                            }}>
                                <img src={recipe.image} alt={recipe.image} />
                            </Link>
                        </Col>
                        <Col xs={9} sm={9} md={9} lg={9} xl={9} className={style.recipeContent}>
                            <h5 className={style.recipeTitle}>
                                <Link to={{
                                    pathname: '/recipe',
                                    search: `?id=${recipe.id}`,
                                    state: { recipeId: recipe.id }
                                }}>
                                    {recipe.title}
                                </Link>
                            </h5>
                            <Row className={style.stats}>
                                <Col xs={6} sm={6} md={3} lg={3} xl={3}>
                                    <FontAwesomeIcon className={style.icon} icon={faClock} size="lg" /> {recipe.readyInMinutes} minutes
                                </Col>
                                <Col xs={6} sm={6} md={3} lg={3} xl={3}>
                                    <p>
                                        <FontAwesomeIcon className={style.icon} icon={faUser} size="lg" />
                                        {servings} persons
                                    </p>
                                </Col>
                                <Col xs={6} sm={6} md={3} lg={3} xl={3}>
                                    <FontAwesomeIcon className={style.icon} icon={faMoneyBillAlt} size="lg" /> Rp. {finalPricePerPerson} (${parsePriceToInt}) / persons
                                </Col>
                                <Col xs={6} sm={6} md={3} lg={3} xl={3}>
                                    <FontAwesomeIcon className={style.icon} icon={faMoneyBillAlt} size="lg" /> Rp. {finalPricePerServing} (${finalPricePerServingDollar}) / serving
                                </Col>
                            </Row>
                            <p className={style.recipeSummary}>
                                {`${summary.replace(/(<([^>]+)>)/gi, "")}.....`}
                            </p>
                        </Col>
                    </Row>

                </div>
            )
        })

        renderContent = (
            <React.Fragment>
                <h3 className={style.title}>{`Results for ${query}`}</h3>
                {renderRecipes}
            </React.Fragment>
        )
    }

    if (responseStatus === '') {
        return <Loading />
    }

    return (
        <section className={style.searchResult}>
            {renderContent}
        </section>
    )
}

export default SearchResult;