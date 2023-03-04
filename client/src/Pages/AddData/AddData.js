import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addData } from "../../Redux/Actions";
import Axios from 'axios'
import {MainContext} from '../../Providers/MainProvider'

function AddData(props) {
    const context = useContext(MainContext)
    console.log(context)
    const navigate=useNavigate()
    const dispatch = useDispatch()
    const [empName,setEmpName] = useState('')
    const [empId,setEmpId] = useState('')
    const [empEmail,setEmpEmail] = useState('')
    const addEmployee = ()=>{
        const formData={
            name:empName,
            id:empId,
            email:empEmail
        }
        // dispatch({
        //     type:'ADD USER DETAILS',
        //     payload:formData
        // })
        dispatch(addData(formData))
        // postData(formData)   // {type:'ADD_USER
        setEmpEmail('')               //   payload:{name:'deepak'
        setEmpId('')                  //            email:'deepak@#gmail.com
        setEmpName('')                //            id:'25}
        navigate('/home')         // }
    }
    const postData = async(payload)=>{
        const data = JSON.parse(JSON.stringify(payload))
        // const result = await Axios.post('http://localhost:4500/users',payload)
        // console.log(result)

    }
    return (<>
        <h1>Add Employee</h1>
        <form className="w-50">
        <div className="mb-3">
                <label htmlFor="inputName" className="form-label">Name of Employee:</label>
                <input type="text" className="form-control" id="inputName" value={empName} onChange={(e)=>setEmpName(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">Email address</label>
                <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp"  value={empEmail} onChange={(e)=>setEmpEmail(e.target.value)} />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="inputId" className="form-label">Employee ID</label>
                <input type="number" className="form-control" id="inputID" value={empId} onChange={(e)=>setEmpId(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={addEmployee}>Add</button>
            <button type="submit" className="btn btn-primary ms-2">Reset</button>
        </form>
    </>);
}


export default AddData;