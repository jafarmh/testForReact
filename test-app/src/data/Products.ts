import { ProductEntityProps } from "../interface/Entity"
import { createSlice } from "@reduxjs/toolkit"

const initialState: ProductEntityProps[] = [
    {
        title:"محصول یک",
        price:250000,
        description:"بسیار عالی"
    },
    {
        title:"محصول دو",
        price:450000,
    },
    {
        title:"محصول سه",
        price:230000,
        description:"خوب است"
    },
    {
        title:"محصول چهار",
        price:150000,
        description:"بسیار ارزان"
    },
]


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