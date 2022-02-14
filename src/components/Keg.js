import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>
      <h1>{props.brand} - {props.name}</h1>
      <p>{props.price} - {props.alcoholContent}</p>
      <hr />
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