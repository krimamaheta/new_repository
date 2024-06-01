import React, { useEffect, useState } from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  TableContainer,
} from "@mui/material";
import BaseCard from "../shared/DashboardCard";
import axios from "axios";
import style from "./../../admin/style.module.css"

interface BookingModel{
  bookingId:"",
  payment:"",
  eventLocation:"",
  eventDate:"",
  isBooked:"",
}

const ProductPerfomance = () => {
  const[loading,setLoading]=useState<boolean>(false)
  const[booking,setBooking]=useState<BookingModel[]>([])
  const[error,setError]=useState(null);
  const[page,setPage]=useState(1);
  const[pageSize,setPageSize]=useState(5);

  const fetchBooking = async () => {
    setLoading(true);
    setError(null); // Reset any previous error
    try {
      //https://localhost:44340/api/Booking/AllBooking
      const response = await axios.get(`https://localhost:44340/api/Booking/AllBooking?page=${page}&pageSize=${pageSize}`);
      setBooking(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
      //setError('Failed to fetch bookings. Please try again later.');
      alert('Failed to fetch bookings. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchBooking();
  }, []);


  const handleNextPage = () => {
    setPage(page + 1); 
    fetchBooking ();
    // Increment page number
  }
   
  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
      fetchBooking (); // Decrement page number if greater than 1
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <BaseCard title="Booked Event">
      <TableContainer
        sx={{
          width: {
            xs: "274px",
            sm: "100%",
          },
        }}
      >
        <Table
          aria-label="simple table"
          sx={{
            whiteSpace: "nowrap",
            mt: 2,
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  No.
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  EventLocation
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                EventDate
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                 
                  Payment
                </Typography>
              </TableCell>
              <TableCell align="right">
                
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {booking.map((book,index) => (
              <TableRow key={book.bookingId}>
                <TableCell>
                  <Typography fontSize="15px" fontWeight={500}>
                   {index+1}
                    
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Box>
                      <Typography variant="h6" fontWeight={600}>
                        {book.eventLocation}
                      </Typography>
                      <Typography color="textSecondary" fontSize="13px">
                        {book.eventLocation}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography color="textSecondary" variant="h6">
                    {book.eventDate}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color="textSecondary" variant="h6">
                    {book.payment}
                  </Typography>
                </TableCell>
                <TableCell>
                  {/* <Typography color="textSecondary" variant="h6">
                    {book.isBooked}
                  </Typography> */}
                </TableCell>

                {/* <TableCell>
                  <Chip
                    sx={{
                      pl: "4px",
                      pr: "4px",
                      backgroundColor: book.pbg,
                      color: "#fff",
                    }}
                    size="small"
                    label={book.payment}
                  ></Chip>
                </TableCell> */}
                {/* <TableCell align="right">
                  <Typography variant="h6">${book.payment}k</Typography>
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className={style.main1}>
                <div className={style.font1}>{page}</div>
                <button className={style.button2} onClick={handlePreviousPage} disabled={page === 1}>Previous Page</button>
                <div className={style.font1}>{pageSize}</div>
                <button className={style.button2} onClick={handleNextPage}>Next Page</button>
              </div>
      </TableContainer>
    </BaseCard>
  );
};

export default ProductPerfomance;
