import React, { useState, useEffect } from "react";
import { Container, Typography, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid } from '@mui/material';
import ClientTable from "../components/ClientTable";


function ClientManagement() {
    const [clients, setClients] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5001/clients")
        .then(resp => resp.json())
        .then(clientsInDb => setClients(clientsInDb))
    }, [])
    // console.log(clients)
    
    return (
        <>
            {/* <h1>Client Database</h1> */}
            <Container>
                <Typography variant="h4" align="center" gutterBottom>
                    Client Database
                </Typography>
                {/* add a Search tool here */}
                {/* add a button to add new client here */}
                <ClientTable clientsToDisplay={clients} />
            </Container>
        </>
    )
};


export default ClientManagement;