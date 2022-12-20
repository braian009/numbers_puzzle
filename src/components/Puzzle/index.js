import * as React from "react";
import styled from "styled-components";

import puzzleReducer from "./puzzleReducer";

const Puzzle = () => {
  const [itemsOrder, dispatchItemsOrder] = React.useReducer(puzzleReducer, {
    items: ["4", "1", "2", "7", "6", "3", null, "5", "8"],
    isComplete: false,
  });

  React.useEffect(() => {
    const tileWidth = document.querySelector(".puzzle-square").offsetWidth;

    const puzzleGrid = document.querySelector(".puzzle-squares");

    puzzleGrid.style.setProperty("grid-auto-rows", `${tileWidth}px`);
  }, []);

  window.addEventListener("resize", () => {
    const tileWidth = document.querySelector(".puzzle-square").offsetWidth;

    const puzzleGrid = document.querySelector(".puzzle-squares");

    puzzleGrid.style.setProperty("grid-auto-rows", `${tileWidth}px`);
  });

  return (
    <PuzzleContainer>
      <div className="puzzle-squares">
        {itemsOrder.items.map((item, index) => {
          return (
            <div
              className={`puzzle-square ${item ? "" : "puzzle-square-empty"}`}
              key={`square-${index}`}
              onClick={() =>
                dispatchItemsOrder({ type: "move", payload: index })
              }
            >
              {item}
            </div>
          );
        })}
      </div>
      <div className="puzzle-controls">
        <button
          className="puzzle-shuffle"
          onClick={() => dispatchItemsOrder({ type: "shuffle" })}
        >
          Shuffle
        </button>
        <button
          className="puzzle-reset"
          onClick={() => dispatchItemsOrder({ type: "reset" })}
        >
          Reset
        </button>
      </div>
      {itemsOrder.isComplete && (
        <div className="puzzle-complete">Complete!</div>
      )}
    </PuzzleContainer>
  );
};

const PuzzleContainer = styled.div`

  .puzzle-squares {
    display: grid;
    grid-template-columns: repeat(auto-fit, 33.33333%);
    gap: 0;
    width: 90vw;
    max-width: 24em;
    margin: 0 auto;

    border: 0.5em solid var(--brown);
    border-radius: 0.5em;
    box-shadow: 0 3px 1px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 1px 5px 0 rgba(0, 0, 0, 0.12);
  }

  .puzzle-square {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    
    background-color: var(--dark-green);
    color: var(--font-color);
    border: 1px solid black;
    box-shadow: inset 0 -5px 12px rgba(0, 0, 0, 0.3);
    
    cursor: pointer;
    user-select: none;
  }

  .puzzle-square:active {
    box-shadow: inset 0 0 12px rgba(0, 0, 0, 0.2);
  }

  .puzzle-square-empty,
  .puzzle-square-empty:active {
    border: none;
    background-color: inherit;
    box-shadow: inset 0 4px 12px rgba(0, 0, 0, 0.6);
  }

  .puzzle-complete {
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;

    width: 100%;
    margin: 0 auto;
    margin-top: 0.1em;
    color: var(--success-green);
    background-color: hsla(0, 0%, 0%, 0.1);

    border-radius: 0.5em;  
  }

  .puzzle-controls {
    display: flex;
    justify-content: center;

    * {
      flex: none;
    }
  }

  button {
    font-size: 0.8rem;
    margin: 1em;
    padding: 1em 1.5em;
    
    font-weight: 500;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    border: none;
    border-radius: 0.5em;
    box-shadow: 0 3px 1px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 1px 5px 0 rgba(0, 0, 0, 0.12);
    cursor: pointer;
  }

  button.puzzle-shuffle {
    background-color: var(--palid-red);
    color: var(--font-color);
  }

  button.puzzle-reset {
    background-color: var(--palid-green);
    color: var(--font-color);
  }

  button:active {
    box-shadow: none;
  }
`;

export default Puzzle;
