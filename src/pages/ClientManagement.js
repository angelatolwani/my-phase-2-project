import React, { useState, useEffect } from "react";
import { Container, IconButton } from '@mui/material';
import ClientTable from "../components/ClientTable";
import AddIcon from '@mui/icons-material/Add';
import NewClient from "../components/NewClient";

function ClientManagement() {
    const [clients, setClients] = useState([]);
    const [open, setOpen] = useState(false);
    useEffect(() => {
        fetch("http://localhost:5001/clients")
        .then(resp => resp.json())
        .then(clientsInDb => setClients(clientsInDb))
    }, [])
    
    // opens & closes the new client form
    const handleOpen = () => {setOpen(true)};
    const handleClose = () => {setOpen(false)};

    return (
        <>
            <Container>
                <h1 align="center">Client Database</h1>
                {/* add a Search tool here */}
                <IconButton color="primary" aria-label="add client" onClick={handleOpen}>
                    <AddIcon />
                </IconButton>
                <ClientTable clientsToDisplay={clients} />
                <NewClient open={open} handleClose={handleClose} clients={clients} setClients={setClients} />
            </Container>
        </>
    )
};

export default ClientManagement;