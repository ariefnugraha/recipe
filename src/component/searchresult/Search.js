import React, {useState} from 'react';

import { Container } from 'react-bootstrap';

import Navigation from '../navigation/Navigation';
import SearchResult from './SearchResult';
import Footer from '../navigation/Footer';

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
            <Footer />
        </Container>
    )
}

export default Search;