import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { cashReducer } from './cashReducer';
import { customerReducer } from './customerReducer';
import { thunk } from 'redux-thunk';


const rootReducer = combineReducers({
    cash: cashReducer,
    customer: customerReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
