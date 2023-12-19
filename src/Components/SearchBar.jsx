import React from "react";

const SearchBar = ({
    handleSubmit,
    query,
    isLoading,
    setQuery
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <input 
                value={query}
                className="form-control"
                placeholder="Yemek tarifleri için arama yapınız"
                name="query"
                disabled={isLoading}
                onChange={(event) => setQuery(event.target.value)}
            />   
            <input
                disabled={isLoading || !query}
                type="submit"
                className="btn"
                value="Search"
            />
        </form>
    )
};

export default SearchBar;
