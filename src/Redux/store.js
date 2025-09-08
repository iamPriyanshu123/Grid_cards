import {configureStore} from '@reduxjs/toolkit'
import CardReducer from './slices/cardsSlice';
 export const store=configureStore({
    reducer:{
        Cards:CardReducer,
    }
 })