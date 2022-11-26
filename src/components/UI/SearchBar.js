import React from "react";
import StyledSearchBar from "../../styles/UI/StyledSearchBar";

export default function SearchBar({ type, placeholder }) {
  return (
    <StyledSearchBar>
      <input type={type} placeholder={placeholder} />
    </StyledSearchBar>
  );
}
