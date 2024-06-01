import axios from "axios";

import { eventNames } from "process";
import React, { useEffect, useState } from "react";
import style from "./../changepassword/style.module.css"
import style2 from "./../admin/style.module.css"
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import style1 from "@/app/admin/style.module.css"
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Event {
  eventId?: string|any;
  eventName: string;
  description: string;
}
//admin side add event 
export const Event: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [EventName, setEventName] = useState("");
  const [Description, setDescription] = useState("");

  const [events, setEvent] = useState<Event[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  //update 
  const [updateOpen, setUpdateOpen] = useState(false);
  const [updateEvent, setUpdateEvent] = useState<Event | null>(null);
  const [updatedEventName, setUpdatedEventName] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");


  //add event
  const onClick = async (e:any) => {
    e.preventDefault();
    try {

      const formData = new FormData();
      formData.append("EventName", EventName);
      formData.append("Description", Description);

      const response = await axios.post("https://localhost:44340/Api/Event/AddEvent", formData, {
        headers: {
          "Content-Type": "application/json"
        }
      });


     
      console.log("Event Added Successfully:", response.data);
      alert("Event Added Successfully");
      await FetchEventList();
      
      setEventName("");
      setDescription("");
      handleClose();

    } catch (error) {
      console.error("Error while adding event:", error);
      alert("Failed to add event");
    }
  };

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const FetchEventList = async () => {
     
    setLoading(true)

    try {

      //const res="https://localhost:44340/Api/Event/AllEvent"
      const response = await axios.get(`https://localhost:44340/api/Event/AllEvent?page=${page}&pageSize=${pageSize}`,);
      setEvent(response.data);

    } catch (error) {
      setError("Failed to fetch event list");
      alert("Fail to show Event List")
    } finally {
      setLoading(false)
    }

  }

  useEffect(() => {

    FetchEventList();

  }, [page,pageSize])


  
  const handlePreviousPage = () => {
    if (page > 1) {
        setPage(page - 1);
        FetchEventList();
    }
};

const handleNextPage = () => {
    const nextPage = page + 1;
    if (nextPage !== page) {
        setPage(nextPage);
        FetchEventList();
    }
   
};


  const EventList = async (e:any) => {
    e.preventDefault();
    await FetchEventList();
  }

  //update list

  const fecthEventDetails = async (Id: string) => {
    try {
      const res = await axios.get(`https://localhost:44340/Api/Event/Get/${Id}`);
      console.log(res);
      return res.data;
    } catch (error) {
      console.error("Error fetching event details:", error);
      throw error;
    }
  }


  const UpdateEvent = async (Id: string, updatedata: Event) => {
    try {
      const res = await axios.put(`https://localhost:44340/Api/Event/update/${Id}`, updatedata);
      console.log('----------------update');
      return res.data;
    } catch (error) {
      console.error("Error updating event:", error);
      throw error;
    }
  }

  const handleUpdateOpen = async (event: Event) => {
    try {
      const eventData = await fecthEventDetails(event.eventId);
      setUpdateEvent(eventData);
      setUpdatedEventName(eventData.eventName);
      setUpdatedDescription(eventData.description);
      setUpdateOpen(true);
    } catch (error) {
      console.error("Error fetching event details:", error);
      
    }
  };


  const updateClick = async () => {
    try {
      const updatedData: Event = {
        eventName: updatedEventName,
        description: updatedDescription
      };

      if (updateEvent && updateEvent.eventId) {
        const updatedEvent = await UpdateEvent(updateEvent.eventId, updatedData);
        console.log("Event Updated Successfully:", updatedEvent);
        alert("Event Updated Successfully");
        handleUpdateClose();
        await FetchEventList();
        
      } else {
        console.error("Event Id is missing or invalid.");
        alert("Failed to update event: Invalid event data");
      }
    } catch (error) {
      console.error("Error updating event:", error);
      alert("Failed to update event");
    }
  }
  const handleUpdateClose = () => {
    setUpdateOpen(false);
  };



  //delete

  const handleDelete = async (Id: string) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      try {

        console.log('------------', Id);

        const response = await axios.delete(`https://localhost:44340/Api/Event/DeleteEvent/${Id}`);

        if (response.status === 200) {
          console.log('-----------12', response.data.message);
          setEvent(events.filter(event => event.eventId !== Id));
          if (response.data && response.data.message) {
           await toast.success(response.data.message); // Display success message using toast.success
          } else {
           await toast.success("Event deleted successfully"); // Default success message if response.data.message is missing
          }
          // toast.success(reponse.data.message,{
          //   position: "top-left",
          //   autoClose: 5000,
          //   hideProgressBar: false,
          //   closeOnClick: true,
          //   pauseOnHover: true,
          //   draggable: true,
          //   progress: undefined,
          //   theme: "light",
          //   });
          alert(response.data.message);
        }
        // Filter out the deleted event from the state
      } catch (error) {
        console.error("Error deleting event:", error);
        alert("Failed to delete event");
      }
    }
  };

  


  return (
    <div>

      <div style={{marginLeft:'0rem',marginTop:'2rem'}}>
      <div className={style.button1}>
        <button onClick={handleClickOpen}>+AddEvent</button>
      </div>

      
        <Dialog
          open={open}
          onClose={handleClose}
        >
          <DialogTitle>EventDetails</DialogTitle>
          <DialogContent>
            <DialogContentText>

            </DialogContentText>
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="EventName"
              label="EventName"
              type="text"
              fullWidth
              variant="standard"
              value={EventName}
              onChange={(e) => setEventName(e.target.value)}
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="description"
              name="description"
              label="Description"
              type="text"
              fullWidth
              variant="standard"
              value={Description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" onClick={onClick}>Add</Button>
          </DialogActions>
        </Dialog>
     </div>


     
      <div className={style1.eventList}>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : events.length > 0 ? (
          <>
            <div className={style1.head}>Event List</div>
            <table className={style1.eventTable}>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Event Name</th>
                  <th>Description</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event, index) => (
                  <tr key={index}>
                    <td>{index+1}</td>
                   
                    <td>{event.eventName}</td>
                    <td>{event.description}</td>
                    <td><button onClick={() => handleUpdateOpen(event)}><ModeEditOutlineOutlinedIcon /></button></td>
                    <td><button onClick={() => handleDelete(event.eventId)}><DeleteOutlineOutlinedIcon /></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{marginBlock:'3rem',display:'flex',marginTop:'1rem',marginLeft:'12rem'}}>
                            <div className={style2.font1}>{page}</div>
                            <button className={style2.button2} onClick={handlePreviousPage} disabled={page === 1}>Previous Page</button>
                            <div className={style2.font1}>{pageSize}</div>
                            <button className={style2.button2} onClick={handleNextPage}>Next Page</button>

                            </div>
          </>
        ) : (
          <p>No events available</p>
        )}
      </div>
      {updateOpen && updateEvent && (
        <Dialog open={updateOpen} onClose={handleUpdateClose}>
          <DialogTitle>Update Event</DialogTitle>
          <DialogContent>
            <DialogContentText></DialogContentText>
            <TextField
              autoFocus
              required
              margin="dense"
              id="updatedName"
              name="UpdatedEventName"
              label="EventName"
              type="text"
              fullWidth
              variant="standard"
              value={updatedEventName}
              onChange={(e) => setUpdatedEventName(e.target.value)}
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="updatedDescription"
              name="UpdatedDescription"
              label="Description"
              type="text"
              fullWidth
              variant="standard"
              value={updatedDescription}
              onChange={(e) => setUpdatedDescription(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleUpdateClose}>Cancel</Button>
            <Button type="submit" onClick={updateClick}>Update</Button>
          </DialogActions>
        </Dialog>
      )}


    </div>
  )
}


function async(arg0: any) {
  throw new Error("Function not implemented.");
}

function setLoading(arg0: boolean) {
  throw new Error("Function not implemented.");
}

function setError(arg0: string) {
  throw new Error("Function not implemented.");
}

function setEvent(data: any) {
  throw new Error("Function not implemented.");
}