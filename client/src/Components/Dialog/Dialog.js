import  React, {useState,useEffect} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
  const [openDialog, setOpenDialog] = useState(false)
  const [comments, setComments] = useState([])
  const [loader, setLoader] = useState(false)
  const handleClick = ()=>{
    setTimeout(()=>{callCommments()},2000)
    setOpenDialog(true)
  }
  const callCommments = async()=>{
    const result = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${props.id}`)
    const x = await result.json()
    setComments(x)
  }
  const handleClose = () => {
    setOpenDialog(false);
  };
  useEffect(()=>{
    if(comments.length>0){
      setLoader(false)
      setOpenDialog(true)
    }
    },[comments])
  const handleCloseLoader = ()=>{
    setLoader(false)
  }
  return (
    <div>
      <Button variant='contained' onClick={handleClick}>comments</Button>
      <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loader}
          onClick={handleCloseLoader}
        >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Dialog
        open={openDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Comments"}</DialogTitle>
        <DialogContent>
            <ul>
          {comments.map((element)=>{
            return (
            <>
                <li >
                {element.body}
                </li>
            </>
            )
          })}
          </ul>
        </DialogContent>
      </Dialog>
    </div>
  );
}