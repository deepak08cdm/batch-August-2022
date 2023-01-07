import React, {useState, useEffect} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Dialog from '../Components/Dialog/Dialog'
import Pagination from '@mui/material/Pagination';

function Details(props) {
  const [data, setData] = useState([])
  const [noOfPages, setNoOfPages] = useState(0)
  const [selectedPage, setSelectedPage] = useState(1)
  const [dataPerPage, setDataPerPage] = useState([])
  const mockApi = async()=>{
    const result = await fetch('https://jsonplaceholder.typicode.com/posts')
    const x = await result.json()
    setData(x)
    let no_of_pages = Math.ceil(x.length/3)
    setNoOfPages(no_of_pages)
  }
  useEffect(()=>{
    mockApi()
  },[])
  useEffect(()=>{
    if(data.length>0){
        let start_index = 3*(selectedPage-1)
        let end_index = 3*selectedPage 
        let postPerPage = data.slice(start_index,end_index)
        setDataPerPage(postPerPage)
        console.log(postPerPage)
    }
  },[data,selectedPage])
//   useEffect(()=>{
//     let start_index = 10*(selectedPage-1)
//         let end_index = 10*selectedPage 
//         let postPerPage = data.slice(start_index,end_index)
//         setDataPerPage(postPerPage)
//         console.log(postPerPage)
//   },[selectedPage])
  const handlePageChange = (e,pageNo)=>{
    setSelectedPage(pageNo)
  }
    return (
        <>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>S.no</TableCell>
                <TableCell align="right">Title</TableCell>
                <TableCell align="right">Description</TableCell>
                <TableCell align="right">Action(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataPerPage.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.title}</TableCell>
                  <TableCell align="right">{row.body}</TableCell>
                  <TableCell align="right">
                    <Dialog id={row.id}/>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
        </TableContainer>
        <Pagination count={noOfPages} color="primary" onChange={handlePageChange} />
        </>
      );
}

export default Details