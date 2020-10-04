import React from 'react';
import style from './css/footer.module.css';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faDribbble, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className={style.footer}>
            <Row>
                <Col>
                    <h3>Recipe</h3>
                    <p>
                        recipe is a website to find delicious food recipes to make at home
                    </p>
                </Col>

                <Col>
                    <h3>Social</h3>
                    <div className={style.socialContainer}>
                        <a href="https://www.linkedin.com/in/muhammad-arief-nugraha">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                        <a href="https://www.instagram.com/dvkentury" style={{ margin: '0 2vw' }}>
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                        <a href="https://www.dribbble.com/arief_nugraha" >
                            <FontAwesomeIcon icon={faDribbble} size="2x" />
                        </a>
                    </div>
                </Col>
            </Row>
            <div className={style.creditContent}>
                <p className={style.credit}>
                    Made with {<FontAwesomeIcon icon={faHeart} />} by Muhammad Arief Nugraha
                </p>
            </div>
        </footer>
    )
}

export default Footer;