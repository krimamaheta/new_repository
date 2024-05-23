import axios from "axios";

import { eventNames } from "process";
import React, { useEffect, useState } from "react";
import style from "./../changepassword/style.module.css"
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
  eventId?: string;
  eventName: string;
  description: string;
}
//admin add event 
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
  const onClick = async (e) => {
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


      // Render the success alert using ReactDOM or any other method
      // For example, if you're using ReactDOM, you can render it to a specific element

      // if(response.status===200){

      //   console.log("---------------------",response.data.message)
      //   alert(response.data.message);
      // }

      console.log("Event Added Successfully:", response.data);
      alert("Event Added Successfully");
      await FetchEventList();
      //Reset form fields after successful submission
      setEventName("");
      setDescription("");
      handleClose();

    } catch (error) {
      console.error("Error while adding event:", error);
      alert("Failed to add event");
    }
  };

  const FetchEventList = async () => {
    // e.preventDefault();
    setLoading(true)

    try {
      console.log('------ get all');

      const response = await axios.get("https://localhost:44340/Api/Event/AllEvent",);
      setEvent(response.data);

    } catch (error) {
      setError("Failed to fetch event list");
      alert("Fail to show Event List")
    } finally {
      setLoading(false)
    }

  }

  const EventList = async (e) => {
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

      // await EventList();
      return res.data;
    } catch (error) {
      console.error("Error updating event:", error);
      throw error;
    }
  }

  const handleUpdateOpen = async (event: Event) => {
    try {
      debugger
      const eventData = await fecthEventDetails(event.eventId);
      setUpdateEvent(eventData);
      setUpdatedEventName(eventData.eventName);
      setUpdatedDescription(eventData.description);
      setUpdateOpen(true);
    } catch (error) {
      console.error("Error fetching event details:", error);
      // Handle error (e.g., show error message)
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
        // EventList();
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

  useEffect(() => {

    FetchEventList();

  }, [])

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

  // const handleUpdateClick = async () => {
  //   try {
  //       const response = await axios.put(
  //           `https://localhost:44340/Api/Event/UpdateEvent/${updateEvent?.id}`,
  //           {
  //               EventName: updatedEventName,
  //               Description: updatedDescription,
  //           }
  //       );
  //       console.log("Event Updated Successfully:", response.data);
  //       alert("Event Updated Successfully");
  //       EventList();
  //       handleUpdateClose(); // Close the update dialog after successful update
  //   } catch (error) {
  //       console.error("Error while updating event:", error);
  //       alert("Failed to update event");
  //   }
  // };


  return (
    <div>
      <div className={style.button1}>
        <button onClick={handleClickOpen}>+AddEvent</button>

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


      <div className={style.button1}>
        <button onClick={EventList}>EventList</button>
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
                  <th>id</th>
                  <th>Event Name</th>
                  <th>Description</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event, index) => (
                  <tr key={index}>
                    <td>{event.eventId}</td>
                    <td>{event.eventName}</td>
                    <td>{event.description}</td>
                    <td><button onClick={() => handleUpdateOpen(event)}><ModeEditOutlineOutlinedIcon /></button></td>
                    <td><button onClick={() => handleDelete(event.eventId)}><DeleteOutlineOutlinedIcon /></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
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