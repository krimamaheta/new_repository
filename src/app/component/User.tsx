"use client"
import React, { useEffect, useState } from "react"
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
import { useSelector } from "react-redux";
import { eventNames } from "process";

//admin side User add,update,delete
interface UserModel {
  id: string,
  userName: string,
  email: string,
  password: string,
  eventName: string,
  payment: string,
}
const User = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const [openBookDialog, setOpenBookDialog] = React.useState(false);
   const [openEditDialog, setOpenEditDialog] = React.useState(false);
  const[id,setId]=useState("")

  const handleOpenBookEditDialog = (id:string) => {
    setOpenBookDialog(true);
    alert(id);
    const bookuser=users.find(x=>x.id==id);

  };

  const handleCloseBookEditDialog = () => {
    setOpenBookDialog(false);
  };

  const handleOpenEditDialog = (id:string) => {
    setOpenEditDialog(true);
    
    const userdetails=AdminUser.find(x=>x.id==id);
    if(userdetails){
      const{id,userName,email,password}=userdetails;
      
      setId(id);
      setUserName(userName);
      setEmail(email);
      setPassword(password);
    }
  };

//update user which added by Admin
const updateUserFromAdmin=async()=>{
  try{
   
    const res=await axios.put(`https://localhost:44340/api/User/${id}`,{
      id,
      userName:userName,
      email:email,
      password:password,
    })
    if(res.status==200){
      alert(res.data);
      handleCloseEditDialog();
      await getAllUser();
     
    }else{
      alert(res.data);
      alert("fail to update")
    }
  }catch(error){
    alert("get error to fail update")
  }
}
  
  const handleCloseEditDialog = () => {
    setOpenEditDialog(false);
  };

  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<UserModel[]>([])
  const [AdminUser, setAdminUsers] = useState<UserModel[]>([])
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const fetchAllUser = async()=> {
   
    setLoading(true);
    try {
      //const res1=`https://localhost:44340/api/User/GetAllBookedUser`
      var res = await axios.get(`https://localhost:44340/api/User/GetAllUser?page=${page}&pageSize=${pageSize}`);
      setUsers(res.data);
      setAdminUsers(res.data);
    } catch (error) {
      alert("fail to show list")
      setLoading(true);
    }
    finally {
      setLoading(false);
    }
  }
  const handlePreviousPage = () => {
    if (page > 1) {
        setPage(page - 1);
        fetchAllUser();
    }
};

const handleNextPage = () => {
    const nextPage = page + 1;
    if (nextPage !== page) {
        setPage(nextPage);
        fetchAllUser();
    }
   
};

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const User = useSelector((state:any) => state.auth.user);
  const AddUser = async () => {
    try {
      
      const userId = User.user.userID;
      console.log(userId);
      console.log("userId:", userId);
      console.log("userName:", userName);
      console.log("email:", email);
      console.log("password:", password);

      const res = await axios.post(`https://localhost:44340/api/User/${userId}`, {

        Id: userId,
        userName,
        email,
        password
      }, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log("response", res);
      console.log("email", email);

      if (res.data) {
        alert(res.data);
        await fetchAllUser();
      }
      else {
        alert("fail to add user");
        alert(res.data);
      }



    } catch (error) {
      alert("fail to add user  details");
      throw error;
    }
  }


  //get all user which added by admin
  const getAllUser = async () => {
    setLoading(true);
    try {
      const res = await axios.get('https://localhost:44340/api/User/GetAllUser');
      console.log("res", res);
      setAdminUsers(res.data);

    } catch (error) {
      alert("fail to show list")
      setLoading(true);
    } finally {
      setLoading(false);
    }
  }
  //delete user from admin
  const deleteDetails=async(id:string)=>{
    if(window.confirm("Are you Sure to Delete User ?"))
    try{
      var res=await axios.delete(`https://localhost:44340/api/User/deleteuser?userId=${id}`);
        if(res.status==200){
          alert("delete successfully.");
          await getAllUser();
        }
        else{
          alert("fail to delete");
        }
    }catch(error){
      alert("delete fail");
      throw error;
    }
  }

  useEffect(()=>{
    fetchAllUser();
  },[page,pageSize])
  
  
  return (
    <div>
      <div className={style.heading12}>
      <div className={style.button1} onClick={handleClickOpen}>
        <button>+AddUser</button>
        </div>
      </div>
      
     

      {loading ? (
        <div>Loading...</div>
      ) : AdminUser.length >0 ? (
        <>
          <div className={style1.head}>User List</div>
          <table className={style1.userTable}>
            <thead>
              <tr>
               <th>No.</th>
                <th>Username</th>
                <th>Email</th>
                <th>Edit</th>
                <th>Cancel</th>
               
              </tr>
            </thead>
            <tbody>
              {AdminUser.map((user, index) => (
                <tr key={index}>
                  <td className="p-3">{index+1}</td>
                  <td className="p-3">{user.userName}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3"><button onClick={()=>handleOpenEditDialog(user.id)}><EditIcon/></button></td>
                  <td className="p-3"><button onClick={()=>deleteDetails(user.id)}><DeleteIcon/></button></td>
                  
                 
                </tr>
              ))}
            </tbody>
          </table>
                           <div style={{marginBlock:'3rem',display:'flex',marginTop:'1rem',marginLeft:'4rem'}}>
                              <div className={style.font1}>{page}</div>
                              <button className={style.button2} onClick={handlePreviousPage} disabled={page === 1}>Previous Page</button>
                              <div className={style.font1}>{pageSize}</div>
                              <button className={style.button2} onClick={handleNextPage}>Next Page</button>

                            </div>
        </>
      ) : (
        <div>No users available</div>
      )}


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
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}

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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={AddUser}>Add</Button>
        </DialogActions>
      </Dialog>
     

     


      <Dialog
        open={openEditDialog}
        onClose={handleCloseEditDialog}
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
      <DialogTitle>UpdateUser</DialogTitle>
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
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}

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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditDialog}>Cancel</Button>
          <Button type="submit" onClick={updateUserFromAdmin}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default User;