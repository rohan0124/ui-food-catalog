import React from "react";
import "./SearchBox.css"

const SearchBox = (props) => {

  const { handleTextChange, value } = props;

  const onChange = (event) => {

    handleTextChange(event.target.value)
  }

  return (
    <div>
      <input placeholder="Search a dish" value={value} onChange={onChange}/>
    </div>
  )
}

export default SearchBox