
// src/components/BuyNowModal.jsx
import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  IconButton,
  RadioGroup,
  FormControlLabel,
  Radio,
  Divider,
 
} from '@mui/material';
 import CloseIcon  from '@mui/icons-material/Close'
 

const BuyNowModal = ({ open, handleClose, handleBuyNow ,selectedItems }) => {
  const [paymentMode,setpaymentmode] = useState('cod')

//selectedItems must be always an array for easy maping 

const items =  selectedItems ?(Array.isArray(selectedItems)?selectedItems:[selectedItems]):[];

// reset payment mode whe user model close
useEffect(()=>{
  if(!open){
    setpaymentmode('cod')
  }
},[open])
  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle sx={{display:"flex",justifyContent:"space-between",alignItems:'center'}}>Select Payment Option
        <IconButton
        aria-label='close'
        onClick={handleClose}
        sx={{position:'absolute',right:8,top:8}}>
          <CloseIcon/>
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Typography variant='subtitle1' gutterBottom>
           <strong>Order Detailes: </strong>
           </Typography>
           {items.length === 0 ? (
            <Typography>
              No Items Selected
            </Typography>
           ):( items.map((item,index)=>(
            <div key={index} style={{marginBottom:'12px'}}>
            <Typography variant='body2'>
              <strong>Name:</strong>{item.name}
           </Typography>
            <Typography variant='body2'>
              <strong>Price:</strong>{item.Price}
           </Typography>
            <Typography variant='body2'>
              <strong>Validity:</strong>{item.validity}
           </Typography>
            <Typography variant='body2'>
              <strong>Description:</strong>{item.discription}
           </Typography>
           {index <item.length -1 && <Divider sx={{my:1}}/>}
             </div> 
           )))}
           <Divider sx={{my:2}}/>
           <Typography variant='subtitle1' gutterBottom>
            Choose Payment Method:
           </Typography>
           <RadioGroup value={paymentMode} onChange={(e)=>setpaymentmode(e.target.value)}>
            <FormControlLabel value="cod" control={<Radio/>} label="Cash on Delivery"/>
            <FormControlLabel value="online" control={<Radio/>} label="Online Payment"/>

           </RadioGroup>
      </DialogContent>
      <DialogActions>
          <Button onClick={handleClose}variant="outlined" color="error">
                 Cancel
        </Button>
        <Button onClick={() => handleBuyNow(paymentMode)} variant="contained" color="primary">
          Confirm Order
        </Button>
       
      </DialogActions>
    </Dialog>
  );
};

export default BuyNowModal;
