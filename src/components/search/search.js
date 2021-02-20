import React, {useState, useEffect} from 'react';

function Search(UpdateSearch) {
    const [filter, setFilter] = useState('');

    useEffect(() => {
        UpdateSearch(filter)
    })

    return (
        <input
        classname="form-control search-input"
        type="text"
        placeholder="Поиск на Facebook"
        onChange={e => setFilter(e.target.value)}
        />
    )
}

export default Search;