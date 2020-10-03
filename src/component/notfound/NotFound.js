import React from 'react';
import style from './css/notfound.module.css';

const NotFound = () => {
    return (
        <section className={style.notfound}>
            <h1 className={style.title}>look's like the plate is empty</h1>
            <div className={style.iconContainer}>
                <img src="/asset/notfound.png" alt="Not Found Icon" />
            </div>
            <p className={style.text}>unfortunately we can't find any recipe :( please make sure your keyword or recipe id is right</p>
        </section>
    )
}

export default NotFound