import React from 'react';
import style from './css/recipeinstruction.module.css';

const RecipeInstruction = ({ instruction }) => {
    return (
        <section className={style.recipeInstruction}>
            <h1 className={style.title}>Instruction</h1>
            <p className={style.instruction}>{instruction}</p>
        </section>
    )
}

export default RecipeInstruction;