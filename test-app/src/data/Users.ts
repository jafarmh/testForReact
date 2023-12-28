import { UserEntityProps } from "../interface/Entity"
import { createSlice } from "@reduxjs/toolkit"

const initialState: UserEntityProps[] = [
    {
        name:"کاربر یک",
        mobile:"0913578536",
        email:"karbar1@yahoo.com"
    },
    {
        name:"کاربر 2",
        mobile:"0913578536",
        email:"karbar2@yahoo.com"
    },
    {
        name:"کاربر سه",
        mobile:"0913578516",
        email:"karbar3@yahoo.com"
    },
    {
        name:"کاربر 4",
        mobile:"0913128536",
        email:"karbar4@yahoo.com"
    },
    
]


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