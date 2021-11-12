import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

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

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const {user} = useAuth();
    const {button} = useStyle();

// Show My Orders
    useEffect(() => {
        const url = `http://localhost:5000/orders?email=${user.email}`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setOrders(data)
        })
    }, [])

// Delete Orders

    const handleDeleteOrder = id => {
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

    return (
        <div>
            <h2>My Orders</h2>
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
                            <TableCell align="right">{row.status}</TableCell>
                            <TableCell align="right"><Button onClick={() => handleDeleteOrder(row._id)} className={button}>Delete</Button></TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default MyOrders;