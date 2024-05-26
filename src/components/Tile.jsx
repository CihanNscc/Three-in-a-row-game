import React from "react";

const Tile = (props) => {
  return (
    <div
      className="tile"
      data-cantoggle={props.canToggle}
      data-currentstate={props.currentState}
      data-correctstate={props.correctState}
      onClick={props.onClick}
      style={
        props.currentState === 1
          ? { backgroundColor: "#00a8ff" }
          : props.currentState === 2
          ? { backgroundColor: "white" }
          : { backgroundColor: "#242424" }
      }
    >
      <b>
        {props.showMark &&
        props.currentState != props.correctState &&
        props.currentState != 0
          ? "X"
          : ""}
      </b>
    </div>
  );
};

export default Tile;
