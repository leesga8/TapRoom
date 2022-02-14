import React from "react";
import PropTypes from "prop-types";
import Keg from "./Keg";

function KegList(props) {
  return (
    <React.Fragment>
      <hr />

      {props.mainKegList.map((keg, index) =>
        <Keg brand={keg.brand}
          name={keg.name}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          key={index} />
      )}
    </React.Fragment>
  );
}

export default KegList;
