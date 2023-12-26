export const initialState = {
  id: 1,
  items: [],
  totalCost: 0,
  totalQuantity: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ID":
      return { ...state, id: action.payload };

    case "ADD_TO_CART":
      const newItem = action.payload;
      const updatedItems = [...state.items, newItem];
      const updatedTotalCost =
        state.totalCost + newItem.price * newItem.quantity;
      const updatedTotalQuantity = state.totalQuantity + newItem.quantity;

      return {
        ...state,
        items: updatedItems,
        totalCost: updatedTotalCost,
        totalQuantity: updatedTotalQuantity,
      };

    case "REMOVE_FROM_CART":
      const removedItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      const filteredItems = state.items.filter(
        (item) => item.id !== action.payload.id
      );

      const updatedTotalCostAfterRemoved =
        state.totalCost - removedItem.price * removedItem.quantity;
      const updatedTotalQuantityAfterRemove =
        state.totalQuantity - removedItem.quantity;

      return {
        ...state,
        items: filteredItems,
        totalCost: updatedTotalCostAfterRemoved,
        totalQuantity: updatedTotalQuantityAfterRemove,
      };

    case "UPDATE_QUANTITY":
      const { id, quantity } = action.payload;
      const updatedItemsAfterUpdate = state.items.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );

      const updatedTotalCostAfterUpdate = updatedItemsAfterUpdate.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      const updatedTotalQuantityAfterUpdate = updatedItemsAfterUpdate.reduce(
        (total, item) => total + item.quantity,
        0
      );

      return {
        ...state,
        items: updatedItemsAfterUpdate,
        totalCost: updatedTotalCostAfterUpdate,
        totalQuantity: updatedTotalQuantityAfterUpdate,
      };

    default:
      return state;
  }
};
