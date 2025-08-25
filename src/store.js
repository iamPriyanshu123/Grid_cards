import {configureStore} from '@reduxjs/toolkit'
import CardReducer from '../src/slices/cardSlice';
 export const store=configureStore({
    reducer:{
        Cards:CardReducer,
    }
 })