import React from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));
const HeadingComponentMain = () => {
  return <h1 className="heading heading1">Namaste React Bootcamp</h1>;
};
const HeadingComponent = () => {
  return (
    <div className="innerDiv">
      <HeadingComponentMain />
      <h2 className="heading">Zero to Hero</h2>
      <h3 className="heading heading3">in 3 months!</h3>
      <p className="para">Akshay Saini </p>
    </div>
  );
};
root.render(<HeadingComponent />);