import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllProducts } from 'services/product.service';

export const fetchProducts = createAsyncThunk(
    'common/fetchProducts',
    async () => {
        return await getAllProducts()
    }
)

const initialState = {
    cartCounter: 0,
    products: [],
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
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

export const { addToCart } = productSlice.actions
export default productSlice.reducer