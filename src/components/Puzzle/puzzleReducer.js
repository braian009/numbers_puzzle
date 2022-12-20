const CORRECT = ["1", "2", "3", "4", "5", "6", "7", "8", null];

const trySwap = (newItems, position, adjPosition) => {
  if (newItems[adjPosition] === null) {
    const temp = newItems[position];
    newItems[position] = newItems[adjPosition];
    newItems[adjPosition] = temp;
  }
};

const areEqual = (a, b) => {
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
};

const puzzleReducer = (state, action) => {
  switch (action.type) {
    case "move":
      const newItems = [...state.items];
      const position = action.payload;
      const colNum = position % 3;

      if (position < 6) {
        trySwap(newItems, position, position + 3);
      }
      if (position > 2) {
        trySwap(newItems, position, position - 3);
      }
      if (colNum < 2) {
        trySwap(newItems, position, position + 1);
      }
      if (colNum > 0) {
        trySwap(newItems, position, position - 1);
      }

      return {
        ...state,
        items: [...newItems],
        isComplete: areEqual(newItems, [...CORRECT]),
      };

    case "shuffle":
      let newState = { ...state };
      do {
        for (let i = 0; i < 300; i++) {
          newState = puzzleReducer(
            { ...newState },
            { type: "move", payload: Math.floor(Math.random() * 9) }
          );
        }
      } while (newState.isComplete);

      return { ...newState };

    case "reset":
      return {
        ...state,
        items: [...CORRECT],
        isComplete: true,
      };

    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export default puzzleReducer;
