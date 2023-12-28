import { UserEntityProps } from "../interface/Entity"
import { createSlice } from "@reduxjs/toolkit"

const initialState: UserEntityProps[] = []


export const UserSlice = createSlice({
    name: 'UserData',
    initialState,
    reducers: {
        setUserData: (state, action: { payload: UserEntityProps }) => {

            return [ ...state, ...[action.payload] ]
        },
        emptyUserData: (state) => {
            state=initialState
            return state
        },
    }
})

export const { setUserData, emptyUserData } = UserSlice.actions

export default UserSlice.reducer