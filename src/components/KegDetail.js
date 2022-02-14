import React from "react";
import PropTypes from "prop-types";

  
function KegDetail(props){
  const { keg } = props;

  return (
    <React.Fragment>
      <h1>Keg Detail</h1>      
      <h3>Brand: {keg.brand}</h3>
      <h3>Name: {keg.name}</h3>
      <p>Price: $ {keg.price}</p> 
      <p>Alcohol Content: {keg.alcoholContent}%</p>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object
};

export default KegDetail;