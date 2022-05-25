const SearchCat = ({val, onSearch, ...props}) => {
    return (  
        <div className="searchCat">
            <input
            value={val}
            className="form-control"
            onChange= {onSearch}
            placeholder="Search posts by category"
            {...props} 
            />
        </div>
    );
}
 
export default SearchCat