import React from "react"
import styled from "@emotion/styled"
import SearchIcon from '@mui/icons-material/Search'
import FilterListIcon from '@mui/icons-material/FilterList';
import IconButton from "@mui/material/IconButton"


const SearchContainer = styled.div`
    position: absolute;
    top: 80px;
    display: flex;
    width: 100%;
    height: 50px;
`

const SearchBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #fff;
    padding: 5px;
    margin: 5px;
    border: 1px solid #C4C7D0;
    border-radius: 10px;
`
const SearchIconWrapper = styled.div`
    padding: 2px;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #C4C7D0;
`
const SearchInput = styled.input`
    padding: 2px;
    width: 100%;
    height: 100%;
    border: none;
`
const FilterIconWrapper = styled.button`
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
    background-color: #fff;
    color: #FFC529;
    border: none;
    border-radius: 10px;
    box-shadow: 2px 2px 5px 0px rgba(154, 159, 174, 0.2);
`

const Search = () => {
    return(
        <>
        <SearchContainer>
            <SearchBar>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <SearchInput placeholder="Find food..." />
            </SearchBar>
            <FilterIconWrapper>
              <IconButton>
                <FilterListIcon />
              </IconButton>
            </FilterIconWrapper>
        </SearchContainer>
        </>
    )
}

export default Search