import { useState } from "react";
import { Box, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';



function NewClient ( {open, handleClose} ) {
    const [newClientInfo, setNewClientInfo] = useState({
      petName: "",
      petSpecies: "",
      petBreed: "",
      petAge: "",
      petGender: "X",
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

    // console.log(newClientInfo)
    function handleFormSubmit(event) {
        event.preventDefault();
        console.log("submitted");
        console.log(newClientInfo);
        handleClose();
    };


    return (
        <>
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
                <DialogTitle>Add New Client</DialogTitle>
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
                        <TextField name="clientPhone" label="Phone Number" variant="filled" value={newClientInfo.clientPhone} onChange={handleChange} />
                        <TextField name="lastVisit" label="Date of Visit" variant="filled" value={newClientInfo.lastVisit} onChange={handleChange} />
                        <TextField name="history" label="Visit Summary" variant="filled" value={newClientInfo.history} onChange={handleChange} />
                        <Button variant="contained" onClick={handleFormSubmit}>Submit</Button>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleFormSubmit}>Submit</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default NewClient;