import './search.css'

const Search = ({val, onSearch, ...props}) => {
    return(
        <div className="search">
            <input
            value={val}
            className= "form-control"
            onChange={onSearch}
            placeholder= "Search movie by name"
            {...props}
            />    
        </div>
    )
}

export default Search