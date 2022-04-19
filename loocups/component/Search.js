import React, { useState } from "react";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { Flex } from "@chakra-ui/react";
import { useAppContext } from "./State/State";

function Searchheader(props) {


  const state = useAppContext()

  const [input, setInput] = useState("");
  const [categories, setCategories] = state.categoriesAPI.categories


  const [category, setCategory] = state.productsAPI.category
  const [search, setSearch] = state.productsAPI.search



  const handleCategory = e => {
    setCategory(e.target.value)
    setSearch('')
  }

  return (
    <div className="wrapper">
      <Flex flex={1}>
        <div className="selectbutton">
          <select className="selectbuttoninside" id="abc"
            value={category} onChange={handleCategory}
            placeholder="Select">
            <option value=''>All </option>
            {
              categories.map(category => (
                <option value={"category=" + category._id} key={category._id}>
                  {category.name}
                </option>
              ))
            }


          </select>
        </div>
        <div className="SearchBarWrapper">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <form>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search freely" />

          </form>
        </div>
      </Flex>
    </div>
  );
}
export default Searchheader;


const IconsWrapper = styled.div``;
