import { ProductEntityProps } from "../interface/Entity"
import { createSlice } from "@reduxjs/toolkit"

const initialState: ProductEntityProps[] = []


export const ProductSlice = createSlice({
    name: 'ProductData',
    initialState,
    reducers: {
        setUserData: (state, action: { payload: ProductEntityProps }) => {

            return [ ...state, ...[action.payload] ]
        },
        emptyUserData: (state) => {
            state=initialState
            return state
        },
    }
})

export const { setUserData, emptyUserData } = ProductSlice.actions

export default ProductSlice.reducer