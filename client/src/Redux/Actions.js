import axios from 'axios'
export function addData(payload){
    return {
        type:"ADD USER DETAILS",
        payload:payload
    }
}

export const callData = async(dispatch, getState)=>{
    const result = await axios.get('https://random-data-api.com//api/users/random_user?size=40')
    const formData = result.data.map((element)=>{
        return({
            name:element.first_name+' '+element.last_name,
            email:element.email,
            id:element.id
        })
    })
    console.log(dispatch, getState())
    dispatch({
        type:'APIDATA',
        payload:formData
    })
}