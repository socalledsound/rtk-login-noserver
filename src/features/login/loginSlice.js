import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    currentUser: null,
    userInfo : {
        username: '',
        email: '',
        password: '',
    }
}

const loginSlice = createSlice({
    name: 'login',
    initialState: INITIAL_STATE,
    reducers: {
        updateUserInfo: (state, action) => {
            state.userInfo = action.payload
        },
        deleteUserInfo : (state) => ({userInfo : INITIAL_STATE.userInfo})
    }
})

export const selectUserInfo = state => state.login.userInfo
export const selectCurrentUser = state => state.login.userInfo.username


export const { updateUserInfo, deleteUserInfo } = loginSlice.actions

export default loginSlice.reducer