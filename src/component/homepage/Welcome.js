import React, { useState } from 'react';
import style from './css/welcome.module.css';

import Form from 'react-bootstrap/Form';

const Welcome = ({onSubmit}) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(input);
    }
    return (
        <section className={style.welcome}>
            <h1 className={style.title}>taste the tasty food around the world from home</h1>
            <p className={style.subtitle}>recipe is here. our website provide more than 500 recipes for you to make in home</p>
            <Form className={style.form} inline onSubmit={handleSubmit}>
                <input type="text" className={style.input} placeholder="Search Recipes" onChange={(e) => setInput(e.target.value)} required />
                <button type="submit" className={style.btn}>search recipe</button>
            </Form>

        </section>
    )
}

export default Welcome;