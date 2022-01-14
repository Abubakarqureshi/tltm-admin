import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCog, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Form, InputGroup } from '@themesberg/react-bootstrap';

const SearchItems = ({term, searchKeyword}) => {
const inputE1 = useRef("")
const getSearchTerm = () => {
    searchKeyword(inputE1.current.value);
} 
    return (
        <div>
            
            <InputGroup> 
            <InputGroup.Text>
                <FontAwesomeIcon icon={faSearch} />
              </InputGroup.Text>
              <Form.Control
                ref={inputE1}
                type="text" 
                placeholder="Search..."
                value={term}
                onChange={getSearchTerm}
                />
            </InputGroup>
                {/* <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faSearch} />
              </InputGroup.Text>
              <Form.Control type="text" placeholder="Search" />
            </InputGroup> */}
        </div>
        
    )
}

export default SearchItems;