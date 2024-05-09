"use client"

import React from "react"
import style from "./../vendor/vendorStyle.module.css"
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

const User = () => {
  const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);
  const [openEditDialog, setOpenEditDialog] = React.useState(false);

  const handleOpenDeleteDialog = () => {
    setOpenDeleteDialog(true);
  };

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
  };

  const handleOpenEditDialog = () => {
    setOpenEditDialog(true);
  };

  const handleCloseEditDialog = () => {
    setOpenEditDialog(false);
  };
  return (
    <div className="flex justify-center items-center h-full">
      <div className={style.user1}>

      </div>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">UserName</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">SelectedEvent</th>

            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Hanuman</td>
            <td className="border px-4 py-2">Hanuman@gmail.com</td>
            <td className="border px-4 py-2">WeddingCeremony</td>
            <td>
              <button className="border px-4 py-2" onClick={handleOpenEditDialog}><LibraryAddIcon /></button>
              <button className="border px-4 py-2" onClick={handleOpenEditDialog}><EditIcon /></button>
              <button className="border px-4 py-2" onClick={handleOpenEditDialog}><RateReviewIcon /></button>
              <button className="border px-4 py-2" onClick={handleOpenDeleteDialog}><DeleteIcon /></button>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Bhim</td>
            <td className="border px-4 py-2">Bhim@gmail.com</td>
            <td className="border px-4 py-2">BirthdayCelebration</td>
            <td>
              <button className="border px-4 py-2"><LibraryAddIcon /></button>
              <button className="border px-4 py-2"><EditIcon /></button>
              <button className="border px-4 py-2"><RateReviewIcon /></button>
              <button className="border px-4 py-2"><DeleteIcon /></button>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Arjun</td>
            <td className="border px-4 py-2">Arjun@gmail.com</td>
            <td className="border px-4 py-2">BirthdayCelebration</td>
            <td>
              <button className="border px-4 py-2"><LibraryAddIcon /></button>
              <button className="border px-4 py-2"><EditIcon /></button>
              <button className="border px-4 py-2"><RateReviewIcon /></button>
              <button className="border px-4 py-2"><DeleteIcon /></button>
            </td>
          </tr>

          <tr>
            <td className="border px-4 py-2">gita</td>
            <td className="border px-4 py-2">gita@gmail.com</td>
            <td className="border px-4 py-2">RingCeremony</td>
            <td>
              <button className="border px-4 py-2"><LibraryAddIcon /></button>
              <button className="border px-4 py-2"><EditIcon /></button>
              <button className="border px-4 py-2"><RateReviewIcon /></button>
              <button className="border px-4 py-2"><DeleteIcon /></button>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Laxmi</td>
            <td className="border px-4 py-2">Laxmi@gmail.com</td>
            <td className="border px-4 py-2">MarrigeAnnyversary</td>
            <td>
              <button className="border px-4 py-2"><LibraryAddIcon /></button>
              <button className="border px-4 py-2"><EditIcon /></button>
              <button className="border px-4 py-2"><RateReviewIcon /></button>
              <button className="border px-4 py-2"><DeleteIcon /></button>
            </td>
          </tr>


          <tr>
            <td className="border px-4 py-2">Laxman</td>
            <td className="border px-4 py-2">Laxman@1gmail.com</td>
            <td className="border px-4 py-2">RingCeremony</td>
            <td>
              <button className="border px-4 py-2"><LibraryAddIcon /></button>
              <button className="border px-4 py-2"><EditIcon /></button>
              <button className="border px-4 py-2"><RateReviewIcon /></button>
              <button className="border px-4 py-2"><DeleteIcon /></button>
            </td>
          </tr>
        </tbody>
      </table>
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
            handleCloseEditDialog();
          },
        }}
      >
        <DialogTitle>AddUser</DialogTitle>
        <DialogContent>
          <DialogContentText>

          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
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
            type="password"
            fullWidth
            variant="standard"
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditDialog}>Cancel</Button>
          <Button type="submit">Add</Button>
        </DialogActions>
      </Dialog>


      


      <Dialog
        open={openDeleteDialog}
        onClose={handleCloseDeleteDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Delete Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this user?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog}>Cancel</Button>
          <Button onClick={handleCloseDeleteDialog} autoFocus>
            Delete
          </Button>
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
            handleCloseEditDialog();
          },
        }}
      >


        <DialogTitle>EditUser</DialogTitle>
        <DialogContent>
          <DialogContentText>

          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
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
            type="password"
            fullWidth
            variant="standard"
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditDialog}>Cancel</Button>
          <Button type="submit">Edit</Button>
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
            handleCloseEditDialog();
          },
        }}
      >

      <DialogTitle>ViewUser</DialogTitle>
        <DialogContent>
          <DialogContentText>

          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="UserName:Hanuman"
            type="text"
            fullWidth
            variant="standard"
            disabled
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="EmailAddress:Hanuman@gmail.com"
            type="email"
            fullWidth
            variant="standard"
            disabled
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="password"
            name="password"
            label="hanuman@123"
            type="password"
            fullWidth
            variant="standard"
            disabled
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditDialog}>Cancel</Button>
          <Button type="submit">View</Button>
        </DialogActions>
      </Dialog>


      

    </div>
  )
}
export default User;