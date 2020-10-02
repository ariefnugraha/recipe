import React from 'react';
import style from './css/recipeoverview.module.css';

import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUser, faMoneyBillAlt } from '@fortawesome/free-regular-svg-icons';

const RecipeOverview = ({ image, title, summary, pricePerServing, time, servings, source }) => {
    const rupiah = 15000;

    let price = pricePerServing.toString();
    let fixedPrice = `${price.substr(0, 2)}.${price.substr(2, 2)}`
    let finalPrice = Math.ceil(parseInt(fixedPrice) * rupiah);

    return (
        <section className={style.recipeOverview}>

            <div className={style.imageContainer}>
                <img src={image} alt={image} />
            </div>
            <div className={style.recipeContent}>
                <h3 className={style.title}>{title}</h3>
                <Row className={style.stats}>
                    <Col>
                        <p className={style.statsItem}>
                            <FontAwesomeIcon icon={faClock} size="lg" /> {time} minutes
                        </p>
                    </Col>
                    <Col>
                        <p className={style.statsItem}>
                            <FontAwesomeIcon icon={faUser} size="lg" /> {servings} person
                            </p>
                    </Col>
                    <Col>
                        <p className={`${style.statsItem} ${style.price}`}>
                            <FontAwesomeIcon icon={faMoneyBillAlt} size="lg" /> Rp. {finalPrice} (${pricePerServing}) / serving
                            </p>
                    </Col>
                </Row>
                <p className={style.summary}>{summary.replace(/(<([^>]+)>)/gi, "")}</p>
            </div>
        </section>
    )
}

export default RecipeOverview;