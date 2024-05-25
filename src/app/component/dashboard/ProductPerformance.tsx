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

const products = [
  {
    id: "1",
    name: "Sunil Joshi",
    post: "Web Designer",
    pname: "Elite Admin",
    priority: "Low",
    pbg: "primary.main",
    budget: "3.9",
  },
  {
    id: "2",
    name: "Andrew McDownland",
    post: "Project Manager",
    pname: "Real Homes WP Theme",
    priority: "Medium",
    pbg: "secondary.main",
    budget: "24.5",
  },
  {
    id: "3",
    name: "Christopher Jamil",
    post: "Project Manager",
    pname: "MedicalPro WP Theme",
    priority: "High",
    pbg: "error.main",
    budget: "12.8",
  },
  {
    id: "4",
    name: "Nirav Joshi",
    post: "Frontend Engineer",
    pname: "Hosting Press HTML",
    priority: "Critical",
    pbg: "success.main",
    budget: "2.4",
  },
];

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
  const fetchBooking = async () => {
    setLoading(true);
    setError(null); // Reset any previous error
    try {
      const response = await axios.get('https://localhost:44340/api/Booking/AllBooking');
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
                  Id
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
                {/* <Typography color="textSecondary" variant="h6">
                  Status
                </Typography> */}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {booking.map((book,index) => (
              <TableRow key={book.bookingId}>
                <TableCell>
                  <Typography fontSize="15px" fontWeight={500}>
                    {book.bookingId}
                    
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
      </TableContainer>
    </BaseCard>
  );
};

export default ProductPerfomance;
