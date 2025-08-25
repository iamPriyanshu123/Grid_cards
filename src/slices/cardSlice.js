import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cards: [],
  current_page: 1,
  cardsPerPage: 6,
};
const cardsSlice = createSlice({
  name: "Cards",
  initialState,
  reducer: {
    setCards: (state, action) => {
      state.Cards = action.payload;
    },
    goToPageNo: (state, action) => {
      state.current_page = action.payloadt;
    },
    nextPage: (state, action) => {
      state.current_page += 1;
    },
  },
});
export const {setCards,goToPageNo,nextPage}= cardsSlice.actions;
export default cardsSlice.reducer;