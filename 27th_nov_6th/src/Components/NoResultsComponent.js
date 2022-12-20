import React from 'react'

const NoResultsComponent = () => {
    const mystyle = {
        color: "black",
        padding: "20px",
        fontFamily: "Arial"
      };
    return (
    <div style={mystyle}>Opps ! No result found...</div>
  )
}

export default NoResultsComponent