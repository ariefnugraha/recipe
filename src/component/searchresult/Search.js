import React, {useState} from 'react';

import { Container } from 'react-bootstrap';

import Navigation from '../navigation/Navigation';
import SearchResult from './SearchResult';

const Search = (props) => {
    const [query, setQuery] = useState(props.location.state.query);
    const styleContainer = {
        padding: 0
    }

    const handleSearch = (keyword) => {
        setQuery(keyword);
    }
    
    return (
        <Container fluid style={styleContainer}>
            <Navigation onSubmit={handleSearch} />
            <SearchResult query={query} />
        </Container>
    )
}

export default Search;