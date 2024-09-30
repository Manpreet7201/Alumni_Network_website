import React, { useState } from 'react';
import '../CSS/AlumniConnect.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Search({ onSearch }) {
    
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
      event.preventDefault();
      onSearch(searchTerm);
    };

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <form onSubmit={handleSearch} className='Form_Search'>
        {/* <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="icon" 
        /> */}
            <input
                type='text'
                className='search'
                value={searchTerm}
                placeholder='Search any keyword e.g.- name, industry, jpb-title'
                onChange={handleChange}
                style={{ marginRight: '10px' , marginLeft:'10px'}}
            />
            <button className='search-button' type='submit'> <FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </form>
    );
}

export default Search;
