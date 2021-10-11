import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getCategories } from 'services/category.service';


// First, create the thunk
export const fetchCategory = createAsyncThunk(
    'common/fetchCategory',
    async () => {
        return await getCategories()
    }
)
// export const fetchAllCategory = createAsyncThunk(
//     'common/fetchCategory',
//     async () => {
//         return await getAllCategories()
//     }
// )

const initialState = {
    value: 0,
    categories: '',
    // allCategories: ''
}
export const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
    extraReducers: {
        [fetchCategory.fulfilled]: (state, action) => {
            state.categories = action.payload
        },
        [fetchCategory.rejected]: (state, action) => {
            state.categories = []
        },
        // [fetchAllCategory.fulfilled]: (state, action) => {
        //     state.getCategories = action.payload
        // },
        // [fetchAllCategory.rejected]: (state, action) => {
        //     state.getCategories = []
        // },
    },
})
// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = commonSlice.actions
export default commonSlice.reducer