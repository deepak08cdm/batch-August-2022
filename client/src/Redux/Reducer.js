import { combineReducers } from "redux"
import { createReducer } from "@reduxjs/toolkit"

const UsersReducer = (state={name:'deepak',user:[]},action)=>{

    switch(action.type){
        case "ADD USER DETAILS":{
            const newArr = state.user
            newArr.push(action.payload)
            // state = {...state,user:[...state.user,action.payload]}
            return {...state,user:newArr}
        }
        case "APIDATA":{
            const newArr = [...state.user,...action.payload]
            return {...state,user:newArr}
        }
        default: return state
    }
}

// const AddUserAction = crea
// const usersReducer = createReducer(state={name:'deepak',user:[]},(builder)=>{

// })

export default combineReducers({UsersReducer})
//pure functions are those that do not have async calls and do not change the values of object
