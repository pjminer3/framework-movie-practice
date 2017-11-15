import React from 'react';

const Search = (props) => {
  return (
    <div>
      <h4>Search Movies:</h4>
      <input 
        onChange={props.onChangeValChange} 
        value={props.searchVal}
      /> 
      <button onClick={props.onClickSearch}>Submit</button>
    </div>
  )
}


export default Search;