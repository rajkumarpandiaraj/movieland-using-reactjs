import React from 'react'

const SearchInput = (props) => {
  const { onChange, submitHandler,searchInput } = props
  const searchValue = String(searchInput)
  return (
    <>
      <div className="search-container">
        <input type="text" className="search-input" value={searchValue} onChange={(e) => onChange(e.target.value)}/>
        <button className="btn" onClick={submitHandler}>Search</button>
      </div>
    </>
  )
}

export default SearchInput