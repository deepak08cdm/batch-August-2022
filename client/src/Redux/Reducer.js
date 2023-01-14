import { combineReducers } from "redux"

const UsersReducer1 = (state={name:'deepak',user:[]},action)=>{

    switch(action.name){
        case "ADD USER DETAILS":{
            const newArr = state.user
            newArr.push(action.payload)
            // state = {...state,user:[...state.user,action.payload]}
            return {...state,user:newArr}
        }
        default: return state
    }
}

export default combineReducers({UsersReducer})
//pure functions are those that do not have async calls and do not change the values of object
