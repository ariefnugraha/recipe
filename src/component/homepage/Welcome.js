import React from 'react';
import style from './css/welcome.module.css';

import Form from 'react-bootstrap/Form';

const Welcome = () => {
    return (
        <section className={style.welcome}>
            <h1 className={style.title}>taste the tasty food around the world from home</h1>
            <p className={style.subtitle}>recipe is here. our website provide more than 500 recipes for you to make in home</p>
            <Form className={style.form} inline>
                <input type="text" className={style.input} placeholder="Search Recipes" required/>
                <button type="submit" className={style.btn}>search recipe</button>
            </Form>

        </section>
    )
}

export default Welcome;