import React from 'react';
import style from './css/recipeingredients.module.css';
import { Row, Col } from 'react-bootstrap';

const RecipeIngredients = ({ ingredients }) => {

    const renderIngredients = ingredients.map((ingredient) => {
        return (
            <Col key={ingredient.id} className={style.ingredientItem} xs={12} sm={12} md={6} lg={6} xl={6}>
                <Row className={style.ingredientContent}>
                    <Col xs={3} sm={3} md={3} lg={3} xl={3} className={style.imageContainer}>
                        <img src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`} alt={ingredient.image} />
                    </Col>
                    <Col xs={9} sm={9} md={9} lg={9} xl={9} className={style.content}>
                        <h5 className={style.ingredientName}>{ingredient.name}</h5>
                        <p>{ingredient.measures.metric.amount} {ingredient.measures.metric.unitShort}</p>
                    </Col>
                </Row>
            </Col>
        )
    })
    return (
        <section className={style.recipeIngredients}>
            <h1 className={style.title}>ingredients</h1>
            <Row className={style.ingredientContainer}>
                {renderIngredients}
            </Row>
        </section>
    )
}

export default RecipeIngredients