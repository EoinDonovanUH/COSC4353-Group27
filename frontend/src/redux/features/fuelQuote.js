import { createSlice } from "@reduxjs/toolkit"

export const fuelQuoteSlice = createSlice({
  name: "fuelQuote",
  initialState: {
    quotes: [],
  },
  reducers: {
    setQuotes: (state, action) => {
      state.quotes = action.payload
    },
  },
})

export const { setQuotes } = fuelQuoteSlice.actions

export default fuelQuoteSlice.reducer
