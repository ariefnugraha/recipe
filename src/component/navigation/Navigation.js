import React from 'react';
import {Navbar, Form} from 'react-bootstrap';
import style from './css/navbar.module.css';

const Navigation = () => {
    return (
        <Navbar className={style.navbar} expand="lg">
            <Navbar.Brand className={style.brand}>Text</Navbar.Brand>
            <Form className={style.form} inline>
                <input type="text" className={style.input} placeholder="Search Recipe" required />
                <button className={style.btn}>search recipe</button>
            </Form>
        </Navbar>
    )
}

export default Navigation;