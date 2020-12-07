import React from "react";

const SearchBar = (props)=>{
    return(
        <input
        type="text"
        value ={props.inputValue}
        onChange={props.nameFilter}
        />
    )
}
export default SearchBar;