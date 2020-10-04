import React, { useState, useEffect } from 'react';
import API from '../../api/base';
import { Link } from 'react-router-dom';
import style from './css/randomrecipes.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUser, faMoneyBillAlt } from '@fortawesome/free-regular-svg-icons';
import { Row, Col } from 'react-bootstrap';

import Loading from '../loading/Loading';
import Warning from '../warning/Warning';

const RandomRecipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [responseStatus, setResponseStatus] = useState('');

    useEffect(() => {
        API.get('/recipes/random', {
            params: {
                number: 8
            }
        })
            .then((response) => {
                setResponseStatus(response.status);
                setRecipes(response.data.recipes)
            })
            .catch((error) => {
                if (error.response) {
                    setResponseStatus(error.status);
                }
            });
    }, []);

    let renderRecipes = null;
    renderRecipes = recipes.map((recipe) => {

        const rupiahRate = 15000;
        const servings = recipe.servings;
        let price = recipe.pricePerServing.toString();
        let newPrice = `${price.substr(0, 2)}.${price.substr(2, 2)}`;
        let parsePriceToInt = parseInt(newPrice);
        let finalPricePerPerson = Math.ceil(parsePriceToInt * rupiahRate);
        let finalPricePerServing = Math.ceil(parsePriceToInt * rupiahRate * servings);
        let finalPricePerServingDollar = parsePriceToInt * servings;

        return (
            <Col xs={12} sm={12} md={6} lg={3} xl={3} className={style.recipeItem} key={recipe.id}>
                <div className={style.recipeImage}>
                    <Link to={{
                        pathname: '/recipe',
                        search: `?id=${recipe.id}`,
                        state: { recipeId: recipe.id }
                    }}>
                        <img src={recipe.image} alt={recipe.title} />
                    </Link>

                </div>
                <div className={style.recipeContent}>
                    <h4 className={style.recipeTitleContainer}>
                        <Link className={style.recipeTitle} to={{
                            pathname: '/recipe',
                            search: `?id=${recipe.id}`,
                            state: { recipeId: recipe.id }
                        }}>
                            {recipe.title.substr(0, 63)}
                        </Link>
                    </h4>
                    <Row>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            <FontAwesomeIcon className={style.icon} icon={faClock} size="lg" /> <p>
                                {recipe.readyInMinutes} minutes
                                </p>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            <FontAwesomeIcon className={style.icon} icon={faUser} size="lg" />
                            <p>
                                {servings} persons
                                </p>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            <FontAwesomeIcon icon={faMoneyBillAlt} size="lg" />
                            <p>Rp. {finalPricePerPerson} (${parsePriceToInt}) / persons</p>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            <FontAwesomeIcon icon={faMoneyBillAlt} size="lg" />
                            <p>Rp. {finalPricePerServing} (${finalPricePerServingDollar}) / serving</p>
                        </Col>
                    </Row>
                </div>
            </Col>
        )
    })

    if (responseStatus === '') {
        return <Loading />
    } else if (responseStatus !== 200) {
        return <Warning />
    } else {
        return (
            <section className={style.recipe}>
                <h1 className={style.title}>recipe you might want to try</h1>
                <Row>
                    {renderRecipes}
                </Row>
            </section>
        )
    }
}

export default RandomRecipes;