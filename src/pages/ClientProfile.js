import React from "react";
import { Button, Card, CardActions, CardContent } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ClientProfile () {
    const params = useParams();
    const clientId = params.id;
    const [clientInfo, setClientInfo] = useState({
        id: "",
        petName: "",
        petSpecies: "",
        petBreed: "",
        petAge: 0,
        petGender: "",
        clientName: "",
        clientEmail: "",
        clientPhone: "",
        lastVisit: "",
        history: ""
    })

    useEffect(() =>{
        fetch(`http://localhost:5001/clients/${clientId}`)
        .then(r => r.json())
        .then(data => setClientInfo(data))
        .catch(error => console.error(error))
      }, [clientId]);
    return (
        <>
            <h2 align="center">Client Profile</h2>
            <Card sx={{ minWidth: 275 }}>
                <CardContent align="center">
                    <h4>Pet Name: {clientInfo.petName}</h4>
                    <h4>Species: {clientInfo.petSpecies}</h4>
                    <h4>Breed: {clientInfo.petBreed}</h4>
                    <h4>Age: {clientInfo.petAge}</h4>
                    <h4>Gender: {clientInfo.petGender}</h4>
                    <h4>Client Name: {clientInfo.clientName}</h4>
                    <h4>Client Email: {clientInfo.clientEmail}</h4>
                    <h4>Client Phone Number: {clientInfo.clientPhone}</h4>
                    <h4>Date of Last Visit: {clientInfo.lastVisit}</h4>
                    <h4>Visit Notes: {clientInfo.history}</h4>
                </CardContent>
                <CardActions>
                    <Button align="center" component={Link} to="/clientmanagement">Return to Client Database</Button>
                </CardActions>
            </Card>
        </>
        //     <h4>Pet Name: {clientInfo.petName}</h4> */}

    )
}

export default ClientProfile;