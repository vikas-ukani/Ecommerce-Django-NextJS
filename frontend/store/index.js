import { configureStore } from '@reduxjs/toolkit'
import commonReducer from './modules/common'

export const store = configureStore({
    reducer: {
        'common': commonReducer,
    },
})