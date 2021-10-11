import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllProducts } from 'services/product.service';

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        return await getAllProducts()
    }
)

const initialState = {
    cartCounter: 0,
    products: [],
    filters: {},
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        applyFilter: (state, action) => {
            const { name, value } = action.payload
            state.filters = { ...state.filters, [name]: value }
        },
        addToCart: (state, action) => {
            state.cartCounter += action.payload
        }
    },
    extraReducers: {
        [fetchProducts.fulfilled]: (state, action) => {
            state.products = action.payload
        },
        [fetchProducts.rejected]: (state, action) => {
            state.products = []
        },
    }
})

export const { addToCart, applyFilter } = productSlice.actions
export default productSlice.reducer