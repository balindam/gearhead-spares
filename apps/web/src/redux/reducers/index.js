// since there will be multiple reducers, we will create this file to combine all the reducers

import {combineReducers } from 'redux';
import { productReducer } from './productReducer';

const reducers = combineReducers({
    allProducts: productReducer
})

export default reducers;