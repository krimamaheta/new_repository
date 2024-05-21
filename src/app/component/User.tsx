"use client"

import React, { useState } from "react"
//import style from "./../vendor/vendorStyle.module.css"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import RateReviewIcon from '@mui/icons-material/RateReview';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios";
import style1 from "@/app/admin/style.module.css"
import style from "./../admin/style.module.css"

interface UserModel{
  id:"",
  userName:"",
  email:"",
  password:"",
  eventName:"",
  payment:"",
}
const User = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);
  // const [openEditDialog, setOpenEditDialog] = React.useState(false);

  // const handleOpenDeleteDialog = () => {
  //   setOpenDeleteDialog(true);
  // };

  // const handleCloseDeleteDialog = () => {
  //   setOpenDeleteDialog(false);
  // };

  // const handleOpenEditDialog = () => {
  //   setOpenEditDialog(true);
  // };

  // const handleCloseEditDialog = () => {
  //   setOpenEditDialog(false);
  // };

  const[loading,setLoading]=useState(false);
  const[users,setUsers]=useState<UserModel[]>([]);

  const fetchAllUser=async()=>{
    setLoading(true);
    try{
      var res=await axios.get(`https://localhost:44340/api/User/GetAllUser`);
      setUsers(res.data);
    }catch(error){  
      alert("fail to show list")
      setLoading(true);
    }
    finally{
      setLoading(false);
    }
  }


  const AddUser=async()=>{
    try{
      const userId = User.user.userID;
      console.log(userId);
      const res=await axios.post(`https://localhost:44340/api/User/${userId}`);
      
    }catch(error){

    }
  }

  return (
    <div>
       <div className={style.button1} onClick={handleClickOpen}><button>+AddUser</button></div>
       <div className={style.button1} onClick={handleClickOpen}><button>UserList</button></div>
       <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>+AddUser</DialogTitle>
        <DialogContent>
          <DialogContentText>
           
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="userName"
            name="userName"
            label="UserName"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="password"
            name="password"
            label="Password"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={AddUser}>Add</Button>
        </DialogActions>
      </Dialog>
      <div className={style.button1} onClick={fetchAllUser}><button>BookedUserList</button></div>
        
        <div>
        {loading ? (
        <p>Loading...</p>
      ) : users.length > 0 ? (
        <>
          <div className={style1.head}>User EventBook List</div>
          <table className={style1.userTable}>
            <thead>
              <tr>
                <th>UserId</th>
                <th>Username</th>
                <th>Email</th>
                <th>EventName</th>
                <th>Payment</th>
                {/* <th>Password</th> */}
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td className="p-3">{user.id}</td>
                  <td className="p-3">{user.userName}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">{user.eventName}</td>
                  <td className="p-3">{user.payment}</td>
                  {/* <td>{user.password}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <p>No users available</p>
      )}
    </div>

        
    </div>
  )
}

export default User;