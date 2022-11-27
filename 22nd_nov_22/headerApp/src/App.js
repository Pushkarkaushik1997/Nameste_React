import React from "react";
import ReactDOM from "react-dom/client";
import img from "../images/logo.png";
import imgA from "../images/avatar1.png";
import reactImg from "../images/react.png";
import searchIcon from "../images/search.png";
const root = ReactDOM.createRoot(document.getElementById("root"));
const Logo = () => {
  return <img className="logo" src={img} alt="imgLogo" />;
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
const Content = () => {
  return (
    <div className="content">
      <p className="para">Welcome to,</p>
      <h1 className="heading">Namaste React Bootcamp</h1>
      <p className="para1">
        The mission of this Bootcamp is to take you from Zero to Hero in React.
        During this 3-month journey, you will learn everything in live classes
        and then implement it by building projects.
      </p>
      <button className="button">Continue</button>
    </div>
  );
};
const HeadingComponent = () => {
  return (
    <div className="mainPage">
      <div className="innerDiv">
        <Logo />
        <SearchBar />
        <Avatar />
      </div>
      <div className="page">
          <Content />
          <img className="reactLogo" src={reactImg} alt="react" />
      </div>
    </div>
  );
};
root.render(<HeadingComponent />);