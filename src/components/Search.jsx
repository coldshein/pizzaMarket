import React from 'react';
import debounce from 'lodash.debounce';

import { setSearchValue } from '../redux/slices/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
const Search = () => {
    const dispatch = useDispatch();
    const [value, setValue] = React.useState('');
    const inputRef = React.useRef();


    const onClearSearch = () => {
        dispatch(setSearchValue(''));
        inputRef.current.focus();
    }
    const updateSearch = React.useCallback(
       debounce((str) => {
        dispatch(setSearchValue(str))
       }, 1000),
       [],
    );

    const onChangeInput = (event) => {
        setValue(event.target.value)
        updateSearch(event.target.value);
    }
    return (
        <div className="search-block">
            <input 
            ref={inputRef}
            type="text" 
            className="search" 
            value={value} 
            onChange={onChangeInput} 
            placeholder='Search pizza...' 
            />

            <svg className='search-icon' id="Layer_1" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M448.3,424.7L335,311.3c20.8-26,33.3-59.1,33.3-95.1c0-84.1-68.1-152.2-152-152.2c-84,0-152,68.2-152,152.2  s68.1,152.2,152,152.2c36.2,0,69.4-12.7,95.5-33.8L425,448L448.3,424.7z M120.1,312.6c-25.7-25.7-39.8-59.9-39.8-96.3  s14.2-70.6,39.8-96.3S180,80,216.3,80c36.3,0,70.5,14.2,96.2,39.9s39.8,59.9,39.8,96.3s-14.2,70.6-39.8,96.3  c-25.7,25.7-59.9,39.9-96.2,39.9C180,352.5,145.8,338.3,120.1,312.6z" /></svg>
            {
                value.length > 0 ? (
                    <svg onClick={onClearSearch} className='search-remove' fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M18.7071 5.29289C19.0976 5.68341 19.0976 6.31658 18.7071 6.7071L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.2929 6.70711C4.90238 6.31658 4.90238 5.68342 5.2929 5.29289C5.68342 4.90237 6.31659 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289Z" fill="black" fillRule="evenodd"/></svg>
                ) : null
            }
        </div>
    );
}

export default Search;