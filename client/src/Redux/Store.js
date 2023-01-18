import { createStore,applyMiddleware } from "redux";
import {configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import Reducers from './Reducer'

const store = createStore(Reducers,applyMiddleware(thunk))
// const store = configureStore(
//     {
//         reducer:Reducers
//     }
// )
export default store

// thunk middleware allows us to dipatch a function insed of action
//this dispatched function will carry async calls and dispatch another action from this function