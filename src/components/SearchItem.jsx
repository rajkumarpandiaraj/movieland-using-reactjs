import React from 'react'

const SearchItem = (props) => {
  const { searchItem } = props
  return (
    <>
      <div className="search-item-container">
        {
          searchItem.Poster != 'N/A' ?
          <img src={searchItem.Poster} alt='poster'/> :
          <img src='https://via.placeholder.com/300' alt='alternate-poster'/>
        }
        <p>{searchItem.Title}</p>
      </div>
    </>
  )
}

export default SearchItem