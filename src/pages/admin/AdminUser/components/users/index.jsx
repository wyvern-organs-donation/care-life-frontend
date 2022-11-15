import React from 'react';
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
  
function GetUsers(props) {
    return (
        <Container maxWidth="lg">
            <TableContainer>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                    <TableCell align="center">Nome</TableCell>
                    <TableCell align="center">Email</TableCell>
                    <TableCell align="center">Data</TableCell>
                    <TableCell align="center">Tipo</TableCell>
                    <TableCell align="center">Contato</TableCell>
                    <TableCell align="center">Ações</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.users.map((user) => (
                    <TableRow key={user.id}>
                        <TableCell align="center">{user.name}</TableCell>
                        <TableCell align="center">{user.email}</TableCell>
                        <TableCell align="center">{user.birth_date}</TableCell>
                        <TableCell align="center">{user.type}</TableCell>
                        <TableCell align="center">{user.phone_number}</TableCell>
                        <TableCell align="center">
                            <ButtonGroup color="primary" aria-label="outlined primary button group">
                                <Button onClick={() => props.userUpdate(user.id)}>Edit</Button>
                                <Button onClick={() => props.userDelete(user.id)}>Del</Button>
                            </ButtonGroup>
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
            </TableContainer>
        </Container>
    );
}
  
export default GetUsers