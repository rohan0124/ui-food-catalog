import React from "react";
import SearchBox from "../SearchBox/SearchBox";
import "./NavBar.css"

const NavBar = (props) => {
  const { dropdownList, searchValue, handleTextChange, categoryValue, onChangeCategory } = props

  const selectCategory = (event) => {
     onChangeCategory(event);
  }

  return (
    <nav className="">
      <div>
        <h1>Awesome Food</h1>
      </div>

      <div>
        <label>
          {'Category '}
          <select 
            className=""
            value={categoryValue} 
            placeholder="Change Category" 
            onChange={selectCategory}
          >
            {dropdownList.map((item,index) => {
              return (
                <option value={item?.name} key={index}>{item.name}</option>
              )
            })}
          </select>
        </label>
      </div>

      <div>
        <SearchBox 
          handleTextChange={handleTextChange} 
          value={searchValue}
        />
      </div>
    </nav>
  )
}

export default NavBar