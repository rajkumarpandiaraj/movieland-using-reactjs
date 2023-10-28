import React from 'react'
import SearchItem from "./SearchItem";

const SearchList = (props) => {
  const { searchList } = props
  return (
    <>
      <div className="search-list-container">

        {
          searchList.length &&

          searchList.map(searchItem => <SearchItem key={searchItem.imdbID} searchItem={searchItem} />)
        }
      </div>
    </>
  )
}

export default SearchList