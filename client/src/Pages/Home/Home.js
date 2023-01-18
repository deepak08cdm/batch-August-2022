import { useEffect, useContext } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Axios from 'axios'
import { useSelector,useDispatch } from "react-redux";
import {callData} from '../../Redux/Actions'
import Card from '../../Components/Card/Card'
import {MainContext} from '../../Providers/MainProvider'

function Home(props) {
    const params = useParams()
    const context = useContext(MainContext)
    // console.log(context)
    const dispatch = useDispatch()
    const history = useNavigate()
    const [empData,setEmpData] = useState([])
    const [data,setData] = useState([])
    const state  = useSelector((data)=>data)
    console.log("inisde redux",state)
    useEffect(()=>{
        if(state.UsersReducer.user.length === 0){
            dispatch(callData)
        }
    },[])

    const searchedData = (val)=>{
        
        if(val){
            const searchedItem = empData.filter((data)=> data.name.toLowerCase().startsWith(val))
            setEmpData(searchedItem)
            return
        }
        setEmpData(data)
    }
    return (
        <>
            <h1 className="formHeader">Employees</h1>
            <input type='text' className="form-control w-75 formInput" placeholder="Filter By Name..." onChange={(e)=>searchedData(e.target.value)}/>
            <table className="table table-striped table-hover w-75 formTable">
                <thead>
                    <tr className="table-primary">
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Employee ID</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {state.UsersReducer.user.map((i,index)=>{return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{i.name}</td>
                            <td>{i.id}</td>
                            <td>{i.email}</td>
                        </tr>
                    )})}
                </tbody>
            </table>
            <button type="submit" className="btn btn-primary" onClick={()=>history(`/add-data`)}>Add</button>
            <input type='text' onChange={(e)=>{context.changeName(e.target.value)}}/>
            <Card data={{id:1,title:'ahgdjha',body:'hasgfdgasv'}}/>
        </>
    );
}
export default Home;