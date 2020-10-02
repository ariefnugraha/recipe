import React from 'react';
import style from './css/loading.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const Loading = () => {
    const quotes = [
        {
            quote: `Humor keeps us alive. Humor and food. Don't forget food .You can go a week without laughing`,
            author: `Joss Whedon`
        },
        {
            quote: `You are what what you eat eats`,
            author: 'Michael Pollan'
        },
        {
            quote: 'First we eat, then we do everything else',
            author: 'M.F.K. Fisher'
        },
        {
            quote: 'People who love to eat are always the best people',
            author: 'Julia Child'
        }, {
            quote: 'Cooking is like love. It should be entered into with abandon or not at all',
            author: 'Harriet van Horne'
        }
    ]

    let randomNumber = Math.floor(Math.random() * Math.floor(6));
    let showQuote = quotes[randomNumber];

    return (
        <section className={style.loading}>
            <h1 className={style.title}>Please be excited</h1>
            <p className={style.subtitle}>we still writing the recipes for you</p>
            <img className={style.icon} src="asset/loading.png" />
            <div className={style.iconQuote}>
                <FontAwesomeIcon icon={faQuoteRight} size="lg" />
            </div>
            <p className={style.quote}>{}</p>
        </section>
    )
}

export default Loading;