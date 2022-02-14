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
      <h1>{props.brand} - {props.name}</h1>
      <p>{props.price} - {props.alcoholContent}</p>
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