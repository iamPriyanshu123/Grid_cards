import { createSlice } from "@reduxjs/toolkit";

const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    data:{},
    cards: [], // yaha sari cards ki list hogi
    currentPage: 1, // default pehle page pe
    perPage: 6, // har page pe 6 cards
  },
  reducers: {
    setCards: (state, action) => {
      state.data=action.payload
      state.cards = action.payload;
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    nextPage: (state) => {
      if (state.currentPage < Math.ceil(state.cards.length / state.perPage)) {
        console.log('slice-data',state.currentPage + " "+Math.ceil(state.cards.length / state.perPage) )
        state.currentPage += 1;
      }
    },
    prevPage: (state) => {
      if (state.currentPage > 1) {
        state.currentPage -= 1;
      }
    },
  },
});

export const { setCards, setPage, nextPage, prevPage } = cardsSlice.actions;
export default cardsSlice.reducer;
