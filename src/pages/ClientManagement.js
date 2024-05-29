import React, { useState, useEffect } from "react";
import { Container, Typography, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, IconButton } from '@mui/material';
import ClientTable from "../components/ClientTable";
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";
import NewClient from "../components/NewClient";

function ClientManagement() {
    const [clients, setClients] = useState([]);
    const [open, setOpen] = useState(false);
    useEffect(() => {
        fetch("http://localhost:5001/clients")
        .then(resp => resp.json())
        .then(clientsInDb => setClients(clientsInDb))
    }, [])
    // console.log(clients)
    
    // opens & closes the new client form
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            {/* <h1>Client Database</h1> */}
            <Container>
                <Typography variant="h4" align="center" gutterBottom>
                    Client Database
                </Typography>
                {/* add a Search tool here */}
                {/* <Button variant="contained">NewPatient</Button> */}
                <IconButton color="primary" aria-label="add client" onClick={handleOpen}>
                    <AddIcon />
                </IconButton>
                <ClientTable clientsToDisplay={clients} />
                <NewClient open={open} handleClose={handleClose} />
            </Container>
        </>
    )
};

export default ClientManagement;