import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  const KegStyles = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    paddingTop: '50px'
  }
  return (
    <React.Fragment>
    <div style={KegStyles}>
      <h3>Brand: {props.brand}</h3>
      <h3>Name: {props.name}</h3>
      <p>Price: $ {props.price}</p> 
      <p>Alcohol Content: {props.alcoholContent}%</p>
      <hr />
    </div>
    </React.Fragment>
  )
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired
}

export default Keg;