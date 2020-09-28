import React from 'react';
import {Row, Col} from 'react-bootstrap';
import style from './css/intro.module.css';

const Intro = () => {
    return (
        <section className={style.intro}>
            <Row>
                <Col className={style.illustration} xs={12} sm={12} md={6} lg={6} xl={6}>
                    <div className={style.background}>
                        <p>dad</p>a
                    </div>
                </Col>
            </Row>
        </section>
    )
}

export default Intro;