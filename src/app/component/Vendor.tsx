"use client"
import React, { useState } from "react";
import style from "./../admin/style.module.css"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios";
import { UseSelector, useSelector } from "react-redux";
import { Flag } from "@mui/icons-material";
import style1 from "@/app/admin/style.module.css"
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import { useDecorationPrice } from "@/context/DecorationPrice";



//admin side vendor

//return value
interface vendor {
    isApprove: any;
    vendorId?: string;
    userId?: string;
    websiteUrl: string;
    address: string;
    cityName: string;
    district: string;
    firmName: string;
    typeOfVendor: string;
}

const Vendor = () => {


    const showToastMessage = (message: any) => {
        toast.success(message, {
            position: toast.POSITION.TOP_RIGHT,
        });
    };


    const [open, setOpen] = React.useState(false);
    const [WebsiteUrl, setWebsiteUrl] = useState("");
    const [Address, setAddress] = useState("");
    const [CityName, setCityName] = useState("");
    const [District, setDistrict] = useState("");
    const [FirmName, setFirmName] = useState("");
    const [TypeOfVendor, setTypeOfVendor] = useState("");


    const [loading, setLoading] = useState<boolean>(false);
    const [vendors, setvendors] = useState<vendor[]>([]);
    const [error, setError] = useState<string | null>(null);



    //update

    const [updateOpen, setUpdateopen] = useState(false);
    const [updateVendor, setUpdatevendor] = useState<vendor | null>(null);
    const [updateWebsiteurl, setUpdateWebsiteurl] = useState("");
    const [updateAddress, setUpdateAddress] = useState("")
    const [updateCityname, setUpdatecityname] = useState("");
    const [updateDistrict, setUpdateDistrict] = useState("");
    const [updateFirmname, setUpdatefirmname] = useState("");
    const [updateTypeofvendor, setUpdatetypeofvendor] = useState("");


    //update

    const FecthVendor = async (Id: string) => {
        try {

            const res = await axios.get(`https://localhost:44340/Api/Vendor/get/${Id}`);
            console.log("----fetch", res);
            console.log(res.data);
            return res.data;

        } catch (error) {
            console.error("Error fetching event details:", error);
            throw error;
        }
    }

    const UpdateVendor = async (Id: string, updatedata: vendor) => {
        try {
            const res = await axios.put(`https://localhost:44340/Api/Vendor/update/${Id}`, updatedata);
            console.log("-----update", res)
            return res.data;

        } catch (error) {
            console.error("Error fetching event details:", error);
            throw error;
        }
    }



    const updateClick = async () => {
        try {
            const updatedData: vendor = {
                websiteUrl: updateWebsiteurl,
                address: updateAddress,
                cityName: updateCityname,
                district: updateDistrict,
                firmName: updateFirmname,
                typeOfVendor: updateTypeofvendor

            };
            console.log(updatedData)

            if (updateVendor && updateVendor.vendorId) {
                const updatedVendor = await UpdateVendor(updateVendor.vendorId, updatedData);
                console.log(updatedVendor);
                // if(updatedVendor.status===200){
                //     console.log("......12342345")
                //     alert(message)
                // }

                console.log("vendor details Updated Successfully:", updatedVendor);
                alert("Vendor Details Updated Successfully");
                handleUpdateClose();
                await AllVendor();



                // EventList();
            } else {
                console.error("vendor Id is missing or invalid.");
                alert("Failed to update event: Invalid event data");
            }
        } catch (error) {
            console.error("Error updating event:", error);
            alert("Failed to update event");
        }
    }
    const handleUpdateClose = () => {
        setUpdateopen(false);
    };

    const VendorUpdateOpen = async (vendor: vendor) => {
        try {
            debugger
            const update = await FecthVendor(vendor.vendorId);
            setUpdatevendor(update);
            setUpdateWebsiteurl(update.websiteUrl)
            setUpdateAddress(update.address);
            setUpdatecityname(update.cityName);
            setUpdateDistrict(update.district);
            setUpdatefirmname(update.firmName);
            setUpdatetypeofvendor(update.typeOfVendor);
            setUpdateopen(true);
        } catch (error) {
            alert('fail update');
            console.log('Error while update the data', error);

        }
    }

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }
    const User = useSelector((state) => state.auth.user);
    console.log(User);
    // User.userID
    const VendorAdd = async (userId: string) => {

        try {

            console.log(User);
            console.log(User.user.userID);
            const userId = User.user.userID;

            const formData = new FormData();
            formData.append("UserId", userId);
            formData.append("WebsiteUrl", WebsiteUrl);
            formData.append("Address", Address);
            formData.append("CityName", CityName);
            formData.append("District", District);
            formData.append("FirmName", FirmName);
            formData.append("TypeOfVendor", TypeOfVendor);


            const response = await axios.post(`https://localhost:44340/Api/vendor/AddVendor/${userId}`, formData, {
                headers: {
                    "Content-Type": "application/json"
                }
            });


            console.log("Decorator Added Successfully:", response.data);
            alert("Decorator detalis Added Successfully");
            //await FetchEventList();
            //Reset form fields after successful submission
            resetForm();

            handleClose();
            await AllVendor();

        } catch (error) {
            console.error("Error while adding event:", error);
            alert("Failed to add event");
            resetForm();
        }
    }
    const resetForm = () => {
        setWebsiteUrl('');
        setAddress('');
        setCityName('');
        setDistrict('');
        setFirmName('');
        setTypeOfVendor('');
        handleClose();
    };


    const AllVendor = async () => {
       // e.preventDefault();
        setLoading(true)
        try {
            const res = await axios.get("https://localhost:44340/Api/vendor/All");
            setvendors(res.data);
        } catch {
            setError("fail to vendor vendorlist")
            alert("fail to show vendorlist")
        } finally {
            setLoading(false);
        }
    }


    const FetchEventList = async (e) => {
        e.preventDefault();
        await AllVendor();
    }
    //vendordelete from list

    const VendorDelete = async (Id: string) => {
        if (window.confirm("Are You Sure to Delete the Vendor ? "))
            try {

                console.log("----------------------------", Id);
                const res = await axios.delete(`https://localhost:44340/Api/vendor/Delete/${Id}`);
                if (res.status === 200) {
                    console.log('-----------12', res.data.message);
                    setvendors(vendors.filter(vendor => vendor.userId !== Id));
                    alert(res.data.message);
                    //showToastMessage("Vendor deleted successfully");
                    await AllVendor();
                } else {
                    // Handle unexpected status codes//500
                    console.error("Unexpected status code:", res.status);
                    alert("Failed to delete vendor: Unexpected status code");
                }
            } catch {
                console.error("Error deleting vendor:", error);
                alert("Failed to delete vendor");
            }
    }
    const { setApprovalStatus } = useDecorationPrice();

    const FinalApprove = async (Id: string) => {

        if (window.confirm("Are You Sure to Approve the Vendor ? "))
            try {
                console.log("----id", Id);
                const res = await axios.put(`https://localhost:44340/api/Vendor/approve/${Id}`);
                console.log("response", res);
                console.log("approve", res.data.isApprove);

                if (res.status === 200) {
                    alert("Approval Confirmation Done");
                    setApprovalStatus(true);
                } else {
                    alert("fail to approve from Admin side");
                    setApprovalStatus(false);
                }

            }
            catch (error) {
                alert("Failed to Approve vendor");
                setApprovalStatus(false);
            }
    }


    const { isApproved } = useDecorationPrice();

    return (

        <div>
            <div>

                <div className={style.button1}><button onClick={handleClickOpen}>+AddVendor</button>

                    <Dialog
                        open={open}
                        onClose={handleClose}
                    >
                        <DialogTitle>VendorDetails</DialogTitle>
                        <DialogContent>
                            <DialogContentText>

                            </DialogContentText>
                            <TextField
                                autoFocus
                                required
                                margin="dense"
                                id="name"
                                name="WebsiteUrl"
                                label="WebsiteUrl"
                                type="text"
                                fullWidth
                                variant="standard"
                                value={WebsiteUrl}
                                onChange={(e) => setWebsiteUrl(e.target.value)}
                            />
                            <TextField
                                autoFocus
                                required
                                margin="dense"
                                id="Address"
                                name="Address"
                                label="Address"
                                type="text"
                                fullWidth
                                variant="standard"
                                value={Address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                            <TextField
                                autoFocus
                                required
                                margin="dense"
                                id="CityName"
                                name="CityName"
                                label="CityName"
                                type="text"
                                fullWidth
                                variant="standard"
                                value={CityName}
                                onChange={(e) => setCityName(e.target.value)}
                            />
                            <TextField
                                autoFocus
                                required
                                margin="dense"
                                id="District"
                                name="District"
                                label="District"
                                type="text"
                                fullWidth
                                variant="standard"
                                value={District}
                                onChange={(e) => setDistrict(e.target.value)}
                            />
                            <TextField
                                autoFocus
                                required
                                margin="dense"
                                id="FirmName"
                                name="FirmName"
                                label="FirmName"
                                type="text"
                                fullWidth
                                variant="standard"
                                value={FirmName}
                                onChange={(e) => setFirmName(e.target.value)}
                            />
                            <TextField
                                autoFocus
                                required
                                margin="dense"
                                id="TypeOfVendor"
                                name="TypeOfVendor"
                                label="TypeOfVendor"
                                type="text"
                                fullWidth
                                variant="standard"
                                value={TypeOfVendor}
                                onChange={(e) => setTypeOfVendor(e.target.value)}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit" onClick={() => VendorAdd(User.userId)}>Add</Button>
                        </DialogActions>
                    </Dialog>
                </div>

                <div className={style.button1} onClick={AllVendor}><button>VendorList</button></div>
                <div className={style1.eventList}>
                    {loading ? (<p>Loading....!</p>) : error ? (<p>Error...</p>) : vendors.length > 0 ? (
                        <>
                            <div className={style1.head}>VendorList</div>
                            <table className={style1.eventTable}>
                                <thead>
                                    <tr>
                                        <th>VendorId</th>

                                        <th>websiteUrl</th>
                                        <th>Address</th>
                                        <th> cityName</th>
                                        <th>district</th>
                                        <th>firmName</th>
                                        <th>typeOfVendor</th>
                                        <th>Update</th>
                                        <th>Delete</th>
                                        <th>Approve</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {vendors.map((vendor, index) => (
                                        <tr key={index}>
                                            <td>{vendor.vendorId}</td>

                                            <td>{vendor.websiteUrl}</td>
                                            <td>{vendor.address}</td>
                                            <td>{vendor.cityName}</td>
                                            <td>{vendor.district}</td>
                                            <td>{vendor.firmName}</td>
                                            <td>{vendor.typeOfVendor}</td>
                                            <td><button onClick={() => VendorUpdateOpen(vendor)}><ModeEditOutlineOutlinedIcon /></button></td>
                                            <td><button onClick={() => VendorDelete(vendor.vendorId)}><DeleteOutlineOutlinedIcon /></button></td>
                                            {/* <td><button onClick={()=>FinalApprove(vendor.vendorId)}><CheckBoxOutlinedIcon /></button></td> */}
                                            <td>
                                                {vendor.isApprove
                                                    ? (
                                                        <button onClick={() => FinalApprove(vendor.vendorId)}>
                                                            <CheckBoxOutlinedIcon style={{ color: 'green' }} />
                                                        </button>
                                                    ) : (
                                                        <button onClick={() => FinalApprove(vendor.vendorId)}>
                                                            <CheckBoxOutlinedIcon style={{ color: 'gray' }} />
                                                        </button>
                                                    )}
                                            </td>


                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </>
                    ) : (<p>No vendor Available</p>)}



                </div>
            </div>

            {updateOpen && updateVendor && (
                <Dialog open={updateOpen} onClose={handleUpdateClose}>
                    <DialogTitle>Update Vendor</DialogTitle>
                    <DialogContent>
                        <DialogContentText></DialogContentText>
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="updateWebsiteurl"
                            name="updateWebsiteurl"
                            label="WebsiteUrl"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={updateWebsiteurl}
                            onChange={(e) => setUpdateWebsiteurl(e.target.value)}
                        />
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="updateAddress"
                            name="updateAddress"
                            label="Address"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={updateAddress}
                            onChange={(e) => setUpdateAddress(e.target.value)}
                        />
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="updateCityname"
                            name="updateCityname"
                            label="Cityname"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={updateCityname}
                            onChange={(e) => setUpdatecityname(e.target.value)}
                        />

                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="updateDistrict"
                            name="updateDistrict"
                            label="District"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={updateDistrict}
                            onChange={(e) => setUpdateDistrict(e.target.value)}
                        />
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="updateFirmname"
                            name="updateFirmname"
                            label="FirmName"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={updateFirmname}
                            onChange={(e) => setUpdatefirmname(e.target.value)}
                        />
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="updateTypeofvendor"
                            name="updateTypeofvendor"
                            label="TypeofVendor"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={updateTypeofvendor}
                            onChange={(e) => setUpdatetypeofvendor(e.target.value)}
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

export default Vendor;

