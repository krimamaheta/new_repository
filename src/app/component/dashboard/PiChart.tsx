import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { PieChart } from '@mui/x-charts/PieChart';
import {useState,useEffect} from "react"
import axios from 'axios';
//import { PieChart } from '@mui/icons-material';
const pieParams = { height: 200, margin: { right: 5 } };
const palette = ['red', 'blue', 'green'];

export default function PieColor() {
    const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const fetchAllUser = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get('https://localhost:44340/api/User/GetAllBookedUser');
      setUsers(res.data);
    } catch (error) {
      console.error('Error fetching users:', error);
      alert('Failed to fetch users. Please try again later.');
      //setError('Failed to fetch users. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllUser();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  // Calculate the total payment for all users
  const totalPayment = users.reduce((acc, user) => acc + user.payment, 0);

  // Format user data for the PieChart
  const pieData = users.map(user => ({
    label: `${user.userName} (${((user.payment / totalPayment) * 100).toFixed(2)}%)`, // Display username and their ratio in percentage
    value: user.payment,
  }));
  return (
//     <PieChart
//     data={[
//       { name: "Category 1", value: 10 },
//       { name: "Category 2", value: 20 },
//       { name: "Category 3", value: 30 },
//     ]}
//   />



//work well
    <Stack direction="row" width="100%" textAlign="center" spacing={2}>
      <Box flexGrow={1}>
        <Typography>Users</Typography>
        {/* <PieChart
        series={[{ data: pieData }]}
        // Additional props can be added here
      /> */}
        <PieChart
          series={[{ data: [{ value: 90 },{value:70}] }]}
          {...pieParams}
        />
      </Box>

      <Box flexGrow={1}>
        <Typography>Vendors</Typography>
        <PieChart
          colors={palette}
          series={[{ data: [{ value: 40 }, { value: 60 }] }]}
          {...pieParams}
        />
      </Box>
      <Box flexGrow={1}>
        <Typography>Events</Typography>
        <PieChart
          series={[
            { data: [{ value: 100, color: 'orange' }, { value: 60 }] },
          ]}
          {...pieParams}
        />
      </Box>
    </Stack>
  );
}