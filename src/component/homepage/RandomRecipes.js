import React, { useState, useEffect } from 'react';
import API from '../../api/base';

import style from './css/randomrecipes.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUser, faMoneyBillAlt } from '@fortawesome/free-regular-svg-icons';
import { Row, Col } from 'react-bootstrap';

const RandomRecipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        API.get('/recipes/random', {
            params: {
                apiKey: '276ec49dd63a481ba862b45990caa2dd',
                number: 6
            }
        })
            .then((response) => setRecipes(response.data.recipes))
            .catch((error) => console.log(error));
    }, []);

    let renderRecipes;
    if (recipes.length === 0) {
        renderRecipes = <h1>Gak ada</h1>
    } else {
        renderRecipes = recipes.map((recipe) => {
            const styleRecipe = {
                backgroundImage: `url('${recipe.image}')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
                minHeight: '700px',
                margin: '3vh 0vw'
            }

            const rupiahRate = 14901;
            const servings = recipe.servings;
            let price = recipe.pricePerServing.toString();
            let newPrice = `${price.substr(0, 2)}.${price.substr(2, 2)}`;
            let parsePriceToInt = parseInt(newPrice);
            let finalPricePerPerson = Math.ceil(parsePriceToInt * rupiahRate);
            let finalPricePerServing = Math.ceil(parsePriceToInt * rupiahRate * servings);
            let finalPricePerServingDollar = parsePriceToInt * servings;

            return (
                <Col xs={6} sm={6} md={6} lg={6} xl={6} style={styleRecipe} key={recipe.id}>
                    <div className={style.recipeContent}>
                        <h4 className={style.recipeTitle}>{recipe.title}</h4>
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
                            <FontAwesomeIcon icon={faMoneyBillAlt} size="lg"/>
                                <p>Rp. {finalPricePerPerson} (${parsePriceToInt}) / persons</p>
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            <FontAwesomeIcon icon={faMoneyBillAlt} size="lg"/>
                                <p>Rp. {finalPricePerServing} (${finalPricePerServingDollar}) / serving</p>
                            </Col>
                        </Row>
                    </div>

                </Col>
            )
        })
    }

    return (
        <section className={style.recipe}>
            <h1 className={style.title}>recipe you might want to try</h1>
            <Row>
                {renderRecipes}
            </Row>
        </section>
    )
}

export default RandomRecipes;