import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { AppState, AppThunk } from '../../app/store'

export interface product {
    sku: string 
    name: string
    shortDescription?: string
    description?: string
    image?: string
    category?: string
    price?: number
    brand?: string
    serial?: string
    family?: string
    engine?: string
    supplier?: string
    status?: boolean    
}

export interface productState {
    value: product[]
    status: 'successful' | 'loading' | 'failed'
}

const initialState: productState = {
    value: [
        {
            sku: '123',
            name: 'Banda',
            image: 'banda.webp'
        },
        {
            sku: '223',
            name: 'Balero',
            image: 'balero.jpg'
        },
        {
            sku: '323',
            name: 'Bujia',
            image: 'bujia.webp'
        }
    ],
    status: 'successful'
}

export const productSlice = createSlice ({
    name: 'products',
    initialState,
    reducers: {
        createProduct: (state, action: PayloadAction<product>) => {
            state.value.push(action.payload)
        },
        deleteProduct: (state, action: PayloadAction<string>) => {
            const productIndex = state.value.findIndex(product => product.sku === action.payload)
            if(productIndex !== -1){
                state.value.splice(productIndex, 1)
            }
        },
        updateProduct: (state, action: PayloadAction<product>) => {
            const productIndex = state.value.findIndex(product => product.sku === action.payload.sku)
            state.value.splice(productIndex, 1, action.payload)
        }
    },
})

export const { createProduct, deleteProduct, updateProduct } = productSlice.actions

export const getProducts = (state: AppState) => state.products.value

export default productSlice.reducer