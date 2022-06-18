import { configureStore } from '@reduxjs/toolkit'

import modeReducer from '../modeSlice/modeSlice'

const store = configureStore({
    reducer: {
        modeInfo: modeReducer,
    }
})

export default store