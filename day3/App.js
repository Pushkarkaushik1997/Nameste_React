import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/header/Header'

const root = ReactDOM.createRoot(document.getElementById("root"));

//elemets created with nested heading
// const heading = React.createElement("div",{id:"title"},[
//     React.createElement("h1",{},"Parent Element"),
//     React.createElement("h2",{},"child Element 1"),
//     React.createElement("h3",{},"Child Element 2"),
    
// ])
// root.render(heading)


//functional component with attributes and composition  of components
// const HeadingComponentMain = () => {
//     return <h1 className="heading heading1">Namaste React Bootcamp</h1>;
//   };
// const HeadingComponent = () => {
//     return (
//       <div className="innerDiv">
//         <HeadingComponentMain/>
//         <h2 className="heading">Zero to Hero</h2>
//         <h3 className="heading heading3">in 3 months!</h3>
//         <p className="para">Akshay Saini </p>
//       </div>
//     );
//   };

// root.render(<HeadingComponent/>)


const App = () => {
  return (
    <div> 
      <Header/>
    </div>
  )
}

export default App
