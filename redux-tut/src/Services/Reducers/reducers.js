const initialState = {
  cardData: [],
};
export default function cardItems(sate = initialState, action) {
  switch (action.type) {
    case ADD_TO_CARD:
      return {
        ...state,
        cardData: action.data,
      };
      break;
      default:
        return state;
  }
}
