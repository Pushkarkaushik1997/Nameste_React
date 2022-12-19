import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import imgA from "../images/avatar1.png";
import searchIcon from "../images/search.png";
import CardComponent from "./CardComponent/CardComponent.js";
import SearchComponent from "./SearchComponent.js";
import data from "./data.json";

import { useState } from "react";
import NoResultsComponent from "./NoResultsComponent";
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
  if(!filteredPersons.length) return <NoResultsComponent/>
  return filteredPersons.map((person) => {
    return <CardComponent person={person} key={person.name} />;
  });
};
const BodyComponent = () => {
  const [filteredPersons, setFilteredPersons] = useState(data);
  return (
    <div className="card-container">
      <SearchComponent setFilteredPersons={setFilteredPersons} />
      <CardContainer filteredPersons={filteredPersons} />
    </div>
  );
};

const HeadingComponent = () => {
  useEffect(() => {
    getTeamMembers()
    console.log("hellow")
  
  }, [])

 
  const [filteredPersons, setFilteredPersons] = useState(data);
  const [githubData, setGithubData] = useState([]);

  async function fetchData (githubNames){
    return Promise.all(
      githubNames.map(async (githubName) => {
          return (await fetch(`https://api.github.com/users/${githubName}`)).json();
      })
  )
    console.log(data)
  }
  
  const getTeamMembers = async() => {
    const githubUserNames = ["pushkarkaushik1997","SharmilaNarendra","shrinker03", "ruchamahabal", "rishav-sah", "Pratik33", "shubhamyadav30", "ShailendraSinghRaikwar", "abhishekps782", "mojahidhd"]
    let users = await fetchData(githubUserNames)
    setGithubData(users)
    setFilteredPersons(users)
  }
  return (
    <>
      <div className="mainPage">
        <div className="innerDiv">
          <Logo />
          <SearchComponent githubData={githubData} setFilteredPersons={setFilteredPersons} />
          <Avatar />
        </div>
        <div className="bodyDiv">
          <CardContainer filteredPersons={filteredPersons} />
        </div>
      </div>

      {/* <BodyComponent /> */}
    </>
  );
};
root.render(<HeadingComponent />);
