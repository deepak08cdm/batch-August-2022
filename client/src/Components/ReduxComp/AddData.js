import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddData(props) {
    const history=useNavigate()
    const [empName,setEmpName] = useState('')
    const [empId,setEmpId] = useState('')
    const [empEmail,setEmpEmail] = useState('')
    const dispatch = useDispatch()
    const addEmployee = ()=>{
        const formData={
            name:empName,
            id:empId,
            email:empEmail
        }
        // props.handleData(formData)
        dispatch(addUser(formData))   // {type:'ADD_USER
        setEmpEmail('')               //   payload:{name:'deepak'
        setEmpId('')                  //            email:'deepak@#gmail.com
        setEmpName('')                //            id:'25}
        history.push('/home')         // }
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