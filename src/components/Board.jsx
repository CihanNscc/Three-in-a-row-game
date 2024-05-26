import React from "react";
import { useState, useEffect } from "react";
import Tile from "./Tile";

const Board = (props) => {
  const { data } = props;
  const [board, setBoard] = useState(data);
  const [stateMessage, setStateMessage] = useState("Good Luck!");
  const [showMistakes, setShowMistakes] = useState(false);

  const cycleState = (rowIndex, columnIndex) => {
    setBoard((prevBoard) => {
      const updatedBoard = [...prevBoard];
      const updatedRow = [...updatedBoard[rowIndex]];
      const updatedTile = { ...updatedRow[columnIndex] };
      if (updatedTile.canToggle) {
        updatedTile.currentState = (updatedTile.currentState + 1) % 3;
      }
      updatedRow[columnIndex] = updatedTile;
      updatedBoard[rowIndex] = updatedRow;
      return updatedBoard;
    });
  };

  const restartBoard = () => {
    setBoard(data);
    setStateMessage("Good Luck!");
  };

  const checkStatus = () => {
    let noMistake = true;
    let complete = true;

    board.forEach((row) => {
      row.forEach((tile) => {
        if (
          tile.currentState !== tile.correctState &&
          tile.currentState !== 0
        ) {
          noMistake = false;
        }
        if (tile.currentState === 0) {
          complete = false;
        }
      });
    });

    if (noMistake && complete) {
      setStateMessage("You did it!!");
    } else if (noMistake && !complete) {
      setStateMessage("So far so good");
    } else {
      setStateMessage("Something is wrong");
    }
  };

  const solvePuzzle = () => {
    let newData = JSON.parse(JSON.stringify(data));

    newData.forEach((row) => {
      row.forEach((tile) => {
        tile.currentState = tile.correctState;
      });
    });

    setBoard(newData);
  };

  const handleShowMistakes = () => {
    showMistakes ? setShowMistakes(false) : setShowMistakes(true);
  };

  return (
    <>
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="boardRow">
          {row.map((column, columnIndex) => (
            <Tile
              key={columnIndex}
              canToggle={column.canToggle}
              currentState={column.currentState}
              correctState={column.correctState}
              showMark={showMistakes}
              onClick={() => cycleState(rowIndex, columnIndex)}
            />
          ))}
        </div>
      ))}
      <div className="buttonsDiv">
        <button onClick={props.newGameClick}>New Game</button>
        <button onClick={restartBoard}>Restart</button>
        <button onClick={checkStatus}>Check</button>
      </div>
      <div className="buttonsDiv">
        <button onClick={solvePuzzle}>Solve</button>
        <button onClick={handleShowMistakes}>
          {showMistakes ? "Hide Mistakes" : "Show Mistakes"}
        </button>
      </div>
      <h2>{stateMessage}</h2>
    </>
  );
};

export default Board;
