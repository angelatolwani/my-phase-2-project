import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';



export default function ClientTable( { clientsToDisplay }) {
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.primary.light,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
    
    // console.log(clientsToDisplay)
    return (
        <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="clien table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Pet Name</StyledTableCell>
                        <StyledTableCell align="center">Pet Species</StyledTableCell>
                        <StyledTableCell align="center">Pet Breed</StyledTableCell>
                        <StyledTableCell align="center">Client Name</StyledTableCell>
                        <StyledTableCell align="center">Last Visit</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {clientsToDisplay.map(client => { 
                        return (
                            <StyledTableRow key={client.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell>{client.petName}</TableCell>
                                <TableCell align="center">{client.petSpecies}</TableCell>
                                <TableCell align="center">{client.petBreed}</TableCell>
                                <TableCell align="center">{client.clientName}</TableCell>
                                <TableCell align="center">{client.lastVisit}</TableCell>
                            </StyledTableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
  );
}