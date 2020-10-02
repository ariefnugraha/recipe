import React, {useState, useEffect} from 'react';
import API from '../../api/base';
import {Row, Col} from 'react-bootstrap';

const RecipeSimiliar = ({recipeId}) => {
    const [recipes, setRecipe] = useState([]);
    console.log(recipeId);
    useEffect(() => {
        API.get(`/recipes/${recipeId}/similiar`, {
            param: {
                apiKey: '276ec49dd63a481ba862b45990caa2dd'
            }
        })
        .then((response) => setRecipe(response.data))
        .catch((error) => console.log(error))
    }, []);

    return (
        <h1>Recipe that maybe you like</h1>
    )
}

export default RecipeSimiliar;