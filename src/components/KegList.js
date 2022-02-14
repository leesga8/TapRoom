import React from "react";
import PropTypes from "prop-types";
import Keg from "./Keg";

function KegList(props) {
  return (
    <React.Fragment>
      <hr />

      {props.kegList.map((keg) =>
        <Keg 
          whenKegClicked = { props.onKegSelection }

          brand={keg.brand}
          name={keg.name}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          pint={keg.pint}
          id = {keg.id}
          key={keg.id}
          whenSellPintClicked={props.onSellPintClicked} />
      )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func,
  onSellPintClicked: PropTypes.func
}

export default KegList;
