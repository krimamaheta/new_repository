
'use client'
import React, { FormEvent, useEffect, useState } from "react";
import styled from "styled-components";
import { GlobalStyle } from "./../../Styles/globalStyles";
//import {  signUpSchema } from "@/app/Schemas/page";
//import { ValueType } from "react-select";
import { InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { DatePicker } from '@mui/lab';

// Assuming dayjs is imported or available in your project
//import { ValueType } from "tailwindcss/types/config";



const initialValues = {
    //here pass name
    eventType: "",
    Place: "",
    dateTimeStartEvent: "",
    dateTimeEndEvent: "",
    Budget: ""
};



const EventForm: React.FC = () => {

    const [eventType, setEventType] = useState("")
    const [WeddingCeremony, setweddingCeremony] = useState("");
    const [Birthday, setBirthday] = useState("");
    const [RingCeremony, setRingCeremony] = useState("");
    const [AnnyversaryCelebration, setAnnyversaryCelebration] = useState("");
    const [YagnopavitCeremony, setYagnopavitCeremony] = useState("");
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [EndDate, setEndDate] = useState<Date | null>(null);
    const [Place, setPlace] = useState("");

    const [latitude, setlatitude] = useState("");
    const [longitude, setlongitude] = useState("");

    const [budget, setbudget] = useState("");

    const [locationData, setLocationData] = useState(null);
    useEffect(() => {

        const getLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition)
            } else {
                setLocationData("Geolocation is not supported by this browser.")
            }
        }

        const showPosition = (position) => {
            setLocationData({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            })
        }
        getLocation();
    }, [])

    const handleDateChange = (newValue: Date | null) => {
        setStartDate(newValue);
    };

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setEventType(event.target.value as string);
    };

    // function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    //     throw new Error("Function not implemented.");
    // }
    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault(); // Prevent the default form submission behavior
        // Your form submission logic here
    }


    function setValue(newValue: any) {
        throw new Error("Function not implemented.");
    }

    // const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    //     useFormik({
    //         initialValues,
    //         validationSchema: EventForm,
    //         onSubmit: (values, action) => {
    //             console.log(
    //                 "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
    //                 values
    //             );
    //             console.log(values);
    //             CreateUserPage(values);
    //             action.resetForm();
    //         },
    //     });

    // console.log(
    //     "🚀 ~ file: Registration.jsx ~ line 25 ~ Registration ~ errors",
    //     errors
    // );


    return (
        <>
            <GlobalStyle />

            <Wrapper>
                <div className="container">
                    <div className="modal">
                        <div className="modal-container">
                            <div className="modal-left">
                                <h1 className="modal-title">Welcome! </h1>
                                <form onSubmit={handleSubmit}>
                                    <div className="input-block">
                                        <label htmlFor="eventType" className="input-label">
                                            Type of Event
                                        </label>
                                        <InputLabel id="demo-simple-select-label">EventType</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={eventType}
                                            label="Age"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={WeddingCeremony} style={{ fontSize: "16px", color: "#333" }}>WeddingCeremony</MenuItem>
                                            <MenuItem value={Birthday} style={{ fontSize: "16px", color: "#333" }}>Birthday</MenuItem>
                                            <MenuItem value={RingCeremony} style={{ fontSize: "16px", color: "#333" }}>RingCeremony</MenuItem>
                                            <MenuItem value={AnnyversaryCelebration} style={{ fontSize: "16px", color: "#333" }}>AnnyversaryCelebration</MenuItem>
                                            <MenuItem value={YagnopavitCeremony} style={{ fontSize: "16px", color: "#333" }}>YagnopavitCeremony</MenuItem>

                                        </Select><br></br>
                                        {/* <DatePicker label="Uncontrolled picker" defaultValue={dayjs('2022-04-17')} /> */}

                                        <div className="input-block">
                                            <input type="text" name="place" id="place" placeholder="place" value={Place} onChange={(e) => setPlace(e.target.value)} />
                                        </div>
                                        <div className="input-block">
                                            <DatePicker
                                                label="Controlled picker"
                                                placeholder="selectdate"
                                                value={startDate}
                                                onChange={handleDateChange}
                                                renderInput={(params: any) => <TextField {...params} />}
                                            />
                                        </div>
                                        <div className="input-block">
                                            <DatePicker
                                                label="Controlled picker"
                                                placeholder="selectdate"
                                                value={EndDate}
                                                onChange={handleDateChange}
                                                renderInput={(params: any) => <TextField {...params} />}
                                            /></div>


                                        <div className="input-block">
                                            <input type="text" name="budget" id="bugdet" value={budget} onChange={(e) => setbudget(e.target.value)} placeholder="Budget" />

                                        </div>

                                        <div>
                                            {
                                                locationData ? (
                                                    <div>
                                                        <p>Latitude: {locationData.latitude}</p>
                                                        <p>Longitude: {locationData.longitude}</p>
                                                    </div>
                                                ) : (
                                                    <p>Loading Location Data............</p>
                                                )
                                            }
                                        </div>





                                    </div>


                                    <button type="submit" className="input-button">Check avilibility</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>


        </>
    );
};
export default EventForm;

const Wrapper = styled.section`
  .container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #efedee;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    width: 100%;
    /* height: 60px; */
    background: rgba(51, 51, 51, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.4s;
  }
  .modal-container {
    display: flex;
    max-width: 60vw;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    position: absolute;

    transition-duration: 0.3s;
    background: #fff;
  }
  .modal-title {
    margin: 0;
    font-weight: 400;
    color: #55311c;
  }
  .form-error {
    font-size: 1.4rem;
    color: #b22b27;
  }
  .modal-desc {
    margin: 6px 0 30px 0;
  }
  .modal-left {
    padding: 60px 30px 20px;
    background: #fff;
    flex: 1.5;
    transition-duration: 0.5s;
    opacity: 1;
  }

  .modal-right {
    flex: 2;
    font-size: 0;
    transition: 0.3s;
    overflow: hidden;
  }
  .modal-right img {
    width: 100%;
    height: 100%;
    transform: scale(1);
    -o-object-fit: cover;
    object-fit: cover;
    transition-duration: 1.2s;
  }

  .modal.is-open .modal-left {
    transform: translateY(0);
    opacity: 1;
    transition-delay: 0.1s;
  }
  .modal-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .modal-buttons a {
    color: rgba(51, 51, 51, 0.6);
    font-size: 14px;
  }

  .sign-up {
    margin: 60px 0 0;
    font-size: 14px;
    text-align: center;
  }
  .sign-up a {
    color: #8c7569;
  }

  .input-button {
    padding: 1.2rem 3.2rem;
    outline: none;
    text-transform: uppercase;
    border: 0;
    color: #fff;
    border-radius: 4px;
    background: #8c7569;
    transition: 0.3s;
    cursor: pointer;
    font-family: "Nunito", sans-serif;
  }
  .input-button:hover {
    background: #55311c;
  }

  .input-label {
    font-size: 11px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.7px;
    color: #8c7569;
    transition: 0.3s;
  }

  .input-block {
    display: flex;
    flex-direction: column;
    padding: 10px 10px 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 20px;
    transition: 0.3s;
  }
  .input-block input {
    outline: 0;
    border: 0;
    padding: 4px 0 0;
    font-size: 16px;
  }

  .input-block input::-moz-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block input:-ms-input-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block input::placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block:focus-within {
    border-color: #8c7569;
  }
  .input-block:focus-within .input-label {
    color: rgba(140, 117, 105, 0.8);
  }

  @media (max-width: 750px) {
    .modal-container {
      max-width: 90vw;
    }

    .modal-right {
      display: none;
    }
  }
`;
