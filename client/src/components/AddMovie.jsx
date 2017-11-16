import React from 'react';

const AddMovie = (props) => {
  return (
    <div>
      <h4>Add a Movie:</h4>
      <input 
      onChange={props.onChangeAddValChange} 
      value={props.value}
      />
      <button onClick={props.onClickAddMovie}>Submit</button>
    </div>
  )
}


export default AddMovie;