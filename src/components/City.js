import React, { useState } from "react";
import Town from "./Town";

function City(props) {
  const [showTowns, setTowns] = useState(false);

  function show() {
    return props.cityVar.towns.map((townName, townId) => {
      return <Town townName={townName} townId={townId} key={townId} />;
    });
  }

  return (
    <>
      <div
        id={"city" + (props.cityId + 1)}
        onClick={() => {
          setTowns(!showTowns);
        }}
      >
        {props.cityName}
      </div>
      <div>
        {showTowns ? show() : ""}
      </div>
    </>
  );
}

export default City;
