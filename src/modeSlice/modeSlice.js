import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    darkMode: false
}

const modeSlice = createSlice({
  name: 'modeInfo',
  initialState,
  reducers: {
    darkModeOn: (state,) => {
        state.darkMode = true
    },
    darkModeOff: (state,) => {
        state.darkMode = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { darkModeOn, darkModeOff } = modeSlice.actions

export default modeSlice.reducer