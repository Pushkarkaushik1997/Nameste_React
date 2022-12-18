import React from "react";
import ReactDOM from "react-dom/client";
import img from "../images/logo.png";
import imgA from "../images/avatar1.png";
import reactImg from "../images/react.png";
import searchIcon from "../images/search.png";
import CardComponent from './CardComponent/CardComponent.js'

const root = ReactDOM.createRoot(document.getElementById("root"));
const data = [{
  name: "Pushkar",
  city: "Gurgaon",
  qualification: "B.tech cse",
  hobbies: "learning new things",
  currentRole: "front-end developer",
  img : "https://media-exp1.licdn.com/dms/image/C4D03AQGbGCw8a5lH_Q/profile-displayphoto-shrink_200_200/0/1648835306859?e=1675296000&v=beta&t=zi2-WPLit9of6XwkQONztgPMcknEkbr5YvGnd2AGGD8"
},
{
  name: "Ravi",
  city: "Bangalore",
  qualification: "B.tech",
  hobbies: "coding, playing games",
  currentRole: "Senior Associate",
  img : "https://media-exp1.licdn.com/dms/image/C5103AQFoo3dsYDJjIw/profile-displayphoto-shrink_800_800/0/1551502183699?e=1675296000&v=beta&t=vn_UCprymlu9QdzxDh718f8YleOOPrFnD3iGnNed2Lg"
},
{
  name: "Sharmila",
  city: "Bangalore",
  qualification: "B.E. cse",
  hobbies: "reading books , trekking",
  currentRole: "front-end developer",
  img : ""
}
];

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

const CardContainer=()=>{
  return (
    data.map((person) => {
        return <CardComponent person={person} key={person.name} />
    })
);
}
const BodyComponent = () => {
  return (
      <div className="card-container">
          <CardContainer />
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