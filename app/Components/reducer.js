export const initialState = {
  id: 1,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ID":
      return { ...state, id: action.payload };
      break;

    default:
      return state;
  }
};
