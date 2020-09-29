import React, {useState, useEffect} from 'react';

import { Container } from 'react-bootstrap';

import Navigation from '../navigation/Navigation';
import SearchResult from './SearchResult';

const Search = (props) => {
    const [query, setQuery] = useState('');
    const styleContainer = {
        padding: 0
    }
    
    useEffect(() => {
        setQuery(props.location.state.query)
    })
    
    return (
        <Container fluid style={styleContainer}>
            <Navigation />
            <SearchResult query={query} />
        </Container>
    )
}

export default Search;