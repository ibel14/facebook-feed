import React from 'react';

const Search = () => {
    return (
        <input
        className="form-control search-input"
        type="text"
        placeholder="Поиск на Facebook"
        />
    )
}

export default Search;






// function Search(UpdateSearch) {
//     const [filter, setFilter] = useState('');

//     useEffect(() => {
//         UpdateSearch(filter)
//     })

//     return (
//         <input
//         classname="form-control search-input"
//         type="text"
//         placeholder="Поиск на Facebook"
//         onChange={e => setFilter(e.target.value)}
//         />
//     )
// }