import React from 'react';
import style from './css/warning.module.css';

const Warning = () => {
    return (
        <section className={style.warning}>
            <h1 className={style.title}>look's like we have problem</h1>
            <div className={style.iconContainer}>
                <img src="/asset/egg.png" alt="Warning Icon" />
            </div>
            <p className={style.text}>we are sorry. It seems like we have problem to communicate with API. Please try again later</p>
        </section>
    )
}

export default Warning;