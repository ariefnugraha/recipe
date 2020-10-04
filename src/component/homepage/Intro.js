import React from 'react';
import { Row, Col } from 'react-bootstrap';
import style from './css/intro.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheese, faBreadSlice, faBacon, faCarrot } from '@fortawesome/free-solid-svg-icons';

const Intro = () => {
    return (
        <section className={style.intro}>
            <Row>
                <Col className={style.illustration} xs={12} sm={12} md={6} lg={6} xl={6}>
                    <div className={style.background}>
                        <Row className={style.iconContainer}>
                            <Col className={`${style.foodIcon} ${style.cheese}`} xs={6} sm={6} md={6} lg={6} xl={6}>
                                <FontAwesomeIcon icon={faCheese} size="3x" />
                            </Col>
                            <Col className={`${style.foodIcon} ${style.bread}`} xs={6} sm={6} md={6} lg={6} xl={6}>
                                <FontAwesomeIcon icon={faBreadSlice} size="3x" />
                            </Col>
                           
                            <Col className={`${style.foodIcon} ${style.bacon}`} xs={6} sm={6} md={6} lg={6} xl={6}>
                                <FontAwesomeIcon icon={faBacon} size="3x" />
                            </Col>
                            <Col className={`${style.foodIcon} ${style.carrot}`} xs={6} sm={6} md={6} lg={6} xl={6}>
                                <FontAwesomeIcon icon={faCarrot} size="3x" />
                            </Col>
                       
                        </Row>
                    </div>
                </Col>

                <Col className={style.introContent} xs={12} sm={12} md={6} lg={6} xl={6}>
                    <h1 className={style.title}>make food with many diffrent ingredients</h1>
                    <p>from cheese to carrot, we give you recipe with many various ingredient that easy to get</p>
                </Col>
                <Col className={style.introContent} xs={12} sm={12} md={6} lg={6} xl={6}>
                <h1 className={style.title}>easy to make</h1>
                    <p>we provided for you the easiest recipe and short to make. So you can make food that delicous, easy, and also not make time too long</p>
                </Col>
                <Col className={style.illustration} xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Row className={style.makeIconContainer}>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            <img className={`${style.foodIcon} ${style.knife}`} src="../../asset/cleaver.svg" alt="Cleaver Icon" />
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            <img className={`${style.foodIcon} ${style.spatula}`} src="../../asset/spatula.svg" alt="Spatula Icon" />
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            <img className={`${style.foodIcon} ${style.rolling}`} src="../../asset/rolling-pin.svg" alt="Rolling Pin Icon" />
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            <img className={`${style.foodIcon} ${style.mixer}`} src="../../asset/mixer.svg" alt="Mixer Icon" />
                        </Col>
                    </Row>
                </Col>
              
            </Row>
        </section>
    )
}

export default Intro;