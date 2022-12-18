import React from "react";
import ReactDOM from "react-dom/client";
import imgA from "../images/avatar1.png";
import searchIcon from "../images/search.png";
import CardComponent from './CardComponent/CardComponent.js'
import SearchComponent from './SearchComponent.js';
import data from './data.json';

import { useState } from 'react';
const root = ReactDOM.createRoot(document.getElementById("root"));
 
const Logo = () => {
  return <div className="logo"> Hustlers</div>;
};
const SearchBar = () => {
  return (
    <div className="searchBarDiv">
      <input className="searchBar" type="text" placeholder="search" />
      <img className="searchIcon" src={searchIcon} alt="search" />
    </div>
  );
};
const Avatar = () => {
  return <img className="avatar" src={imgA} alt="imgAvatar" />;
};

const CardContainer = ({ filteredPersons }) => {
  return (
      filteredPersons.map((person) => {
          return <CardComponent person={person} key={person.name} />
      })
  );
}
const BodyComponent = () => {
  const [filteredPersons, setFilteredPersons] = useState(data);
  return (
      <div className="card-container">
    
          <SearchComponent setFilteredPersons={setFilteredPersons} />
          <CardContainer filteredPersons={filteredPersons} />
      </div>
  )
}

const HeadingComponent = () => {
  return (
    <>
    <div className="mainPage">
      <div className="innerDiv">
        <Logo />
        <SearchBar />
        <Avatar />
      </div>
    </div>
    
    

    <BodyComponent />
    </>
  );
};
root.render(<HeadingComponent />);