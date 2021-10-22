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
    carts: [],
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
            state.products = []year. The opportunities to support these projects are nearly endless! You can dive into the ‘hacktoberfest’ topic on GitHub and GitLab, and start helping right nyear. The opportunities to support these projects are nearly endless! You can dive into the ‘hacktoberfest’ topic on GitHub and GitLab, and start helping right nyear. The opportunities to support these projects are nearly endless! You can dive into the ‘hacktoberfest’ topic on GitHub and GitLab, and start helping right nyear. The opportunities to support these projects are nearly endless! You can dive into the ‘hacktoberfest’ topic on GitHub and GitLab, and start helping right n
        },
    }
})

export const { addToCart, applyFilter } = productSlice.actions
export default productSlice.reducer