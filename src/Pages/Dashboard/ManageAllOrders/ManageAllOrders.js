import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const useStyle = makeStyles({
    button: {
        color: 'white',
        background: 'red',
        border: '1px solid red',
        '&:hover': {
            background: '#fff',
            border: '1px solid red',
            color: 'red'
        }
    }
})
const useButtonStyle = makeStyles({
    pendingButton: {
        color: 'white',
        background: 'gray',
        border: '1px solid cyan',
        '&:hover': {
            background: '#fff',
            border: '1px solid cyan',
            color: 'green'
        }
    }
})

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const {button} = useStyle();
    const {pendingButton} = useButtonStyle();
    const [currentStatus, setCurrentStatus] = useState('');
    
    const handleStatusChange = e => {
        setCurrentStatus(e.target.value);
    }
// Show all orders
    useEffect(() => {
        const url = 'http://localhost:5000/allOrders'
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setOrders(data)
        })
    }, [])
// Update Status
    const handleUpdateChange = (id) => {
       fetch(`http://localhost:5000/statusUpdate/${id}`, {      
           method: 'PUT',
           headers: {
               'content-type': 'application/json'
           },
           body: JSON.stringify({currentStatus}),
       })
       .then(res => res.json())
       .then (data => {
           if(data.modifiedCount > 0){
               alert('Status Updated Successfully.')
           }
       }) 
    }

    // Delete orders
    const handleDeleteOrder = id => {
        const proceed = window.confirm("Are you SURE! you want to DELETE this Order?")
        if(proceed){
            fetch(`http://localhost:5000/deleteOrder/${id}`, {
            method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    alert('Order Delete Successfully.')
                    const restOfOrders = orders.filter(order => order._id !== id)
                    setOrders(restOfOrders);
                }
            })
        }  
    }

    return (
        <Container>
            <h2>Manage all Orders</h2>
            <TableContainer component={Paper}>
                <Table sx={{border:'1px solid cyan'}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Phone</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row) => (
                        <TableRow
                          key={row._id}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                              {row.userName}
                            </TableCell>
                            <TableCell align="right">{row.email}</TableCell>
                            <TableCell align="right">{row.phone}</TableCell>
                            <TableCell align="right">{row.price}</TableCell>
                            <TableCell align="right">
                                <Box sx={{ minWidth: 120 }}>
                                    <Box
                                      component="form"
                                      sx={{
                                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                                      }}
                                      noValidate
                                      autoComplete="off"
                                    >
                                      <div>
                                        <TextField
                                          label="Change Status"
                                          id="outlined-size-small"
                                          defaultValue={row.status}
                                          onChange={handleStatusChange}
                                          size="small"
                                        />
                                      </div>
                                    </Box>
                                </Box>
                             </TableCell>
                            <TableCell align="right"><Button onClick={() => handleUpdateChange(row._id)} className={pendingButton}>Update</Button></TableCell>
                            <TableCell align="right"><Button onClick={() => handleDeleteOrder(row._id)} className={button}>Delete</Button></TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default ManageAllOrders;