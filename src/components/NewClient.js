import { useState } from "react";
import { Box, Button, TextField, Dialog, DialogActions, DialogContent } from '@mui/material';



function NewClient ( {open, handleClose, clients, setClients} ) {
    const [newClientInfo, setNewClientInfo] = useState({
      petName: "",
      petSpecies: "",
      petBreed: "",
      petAge: "",
      petGender: "",
      clientName: "",
      clientEmail: "",
      clientPhone: "",
      lastVisit: "",
      history: ""
    })

    function handleChange(event) {
        setNewClientInfo({
            ...newClientInfo,
            [event.target.name]: event.target.value
        })
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log("submitted");
        console.log(newClientInfo);
        fetch("http://localhost:5001/clients", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newClientInfo)
        })
        .then(resp => resp.json())
        .then(newClientInDb => setClients([...clients, newClientInDb]));
        setNewClientInfo({
            petName: "",
            petSpecies: "",
            petBreed: "",
            petAge: "",
            petGender: "",
            clientName: "",
            clientEmail: "",
            clientPhone: "",
            lastVisit: "",
            history: ""
        });
        handleClose();
    };


    return (
        <>
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
                <DialogContent>
                    <Box
                    component="form"
                    sx={{'& > :not(style)': { m: 1, width: '25ch' }}}
                    noValidate
                    autoComplete="off"
                    >
                        <h1>New Client Form</h1>
                        <TextField name="petName" label="Pet Name" variant="filled" value={newClientInfo.petName} onChange={handleChange} />
                        <TextField name="petSpecies" label="Pet Species" variant="filled" value={newClientInfo.petSpecies} onChange={handleChange} />
                        <TextField name="petBreed" label="Pet Breed" variant="filled" value={newClientInfo.petBreed} onChange={handleChange} />
                        <TextField name="petAge" label="Pet Age" variant="filled" value={newClientInfo.petAge} onChange={handleChange} />
                        <TextField name="petGender" label="Pet Gender" variant="filled" value={newClientInfo.petGender} onChange={handleChange} />
                        <TextField name="clientName" label="Client Name" variant="filled" value={newClientInfo.clientName} onChange={handleChange} />
                        <TextField name="clientEmail" label="Email" variant="filled" value={newClientInfo.clientEmail} onChange={handleChange} />
                        <TextField name="clientPhone" label="Phone Number" variant="filled" placeholder="XXX-XXX-XXXX" value={newClientInfo.clientPhone} onChange={handleChange} />
                        <TextField name="lastVisit" label="Date of Visit" variant="filled" placeholder="YYYY-MM-DD" value={newClientInfo.lastVisit} onChange={handleChange} />
                        <TextField name="history" label="Visit Summary" variant="filled" value={newClientInfo.history} onChange={handleChange} />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button variant="contained" onClick={handleFormSubmit}>Submit</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default NewClient;