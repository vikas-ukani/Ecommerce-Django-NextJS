import { configureStore } from '@reduxjs/toolkit'
import commonReducer from './modules/common'
import productsReducer from './modules/product'

export const store = configureStore({
    reducer: {
        'commons': commonReducer,
        'products': productsReducer,
    },
})