import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { callLoginAPI } from 'services/auth.service';


// First, create the thunk
export const loginProcess = createAsyncThunk(
    'auth/login',
    async (data) => {
        return await callLoginAPI(data)
    }
)
// export const fetchAllCategory = createAsyncThunk(
//     'common/fetchCategory',
//     async () => {
//         return await getAllCategories()
//     }
// )

const initialState = {
    accessToken: null,
    error: null,
    // allCategories: ''
}
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // increment: (state) => {
        //     state.value += 1
        // },
    },
    extraReducers: {
        [loginProcess.fulfilled]: (state, action) => {
            const { status, data } = action.payload
            if (status === 401 || status === 400) {
                state.accessToken = null
                state.error = data.detail
            } else {
                state.accessToken = data.access
                state.error = null

            }
        },
        [loginProcess.rejected]: (state, action) => {
            console.log('action REJED::', action.payload);
            state.accessToken = ''
        },
    },
})
// Action creators are generated for each case reducer function
export const { increment, } = authSlice.actions
export default authSlice.reducer