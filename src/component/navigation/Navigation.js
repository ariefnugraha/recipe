import React, {useState} from 'react';
import {Navbar, Form} from 'react-bootstrap';
import style from './css/navbar.module.css';

const Navigation = (props) => {
    const [keyword, setKeyword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(keyword)
    }

    return (
        <Navbar className={style.navbar} expand="lg">
            <Navbar.Brand className={style.brand}>Text</Navbar.Brand>
            <Form className={style.form} inline onSubmit={handleSubmit}>
                <input type="text" className={style.input} placeholder="Search Recipe" value={keyword} onChange={(e) => setKeyword(e.target.value)} required />
                <button className={style.btn}>search recipe</button>
            </Form>
        </Navbar>
    )
}

export default Navigation;