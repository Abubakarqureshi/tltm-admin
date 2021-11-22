import React, { useRef } from 'react'

const SearchItems = ({term, searchKeyword}) => {
const inputE1 = useRef("")
const getSearchTerm = () => {
    searchKeyword(inputE1.current.value);
} 
    return (
        <div>
            <input 
                ref={inputE1}
                type="text" 
                placeholder="Search..."
                value={term}
                onChange={getSearchTerm} />
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