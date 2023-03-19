
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import React, { useRef } from 'react';
import axios from 'axios'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Modall() {
  const R1=useRef()
  const R2=useRef()
  const R3=useRef()
  const R4=useRef()
const R5=useRef()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const add=()=>{

   

    axios.post('http://localhost:8000/api/shoes/add',{
      name:R1.current.value,
      
      price:R2.current.value,
      size:R3.current.value,
      color:R4.current.value,
      img:R5.current.value,
    })
   
    setOpen(false)
  }

  return (
    <div>
      <Button onClick={handleOpen}>Add new shoes</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add new shoes
          </Typography>
         <div>
          <input type="text" placeholder='name of shoes' ref={R1}></input>
          <input type="number" placeholder='price' ref={R2}></input>
          <input type="number" placeholder='size' ref={R3}></input>
          <input type="color" ref={R4}></input>
          <input type="text" placeholder='image of shoes' ref={R5}></input>
          <button onClick={add}>add new shoe</button>

         </div>
        </Box>
      </Modal>
    </div>
  );
}