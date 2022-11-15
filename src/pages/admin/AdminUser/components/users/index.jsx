import React from 'react'
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import ButtonGroup from '@mui/material/ButtonGroup';
  
function GetUsers(props) {
    console.log(props.users)
    return (
        <Container maxWidth="lg">
            <TableContainer>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                    <TableCell align="right">Ações</TableCell>
                    <TableCell align="center">Contato</TableCell>
                    <TableCell align="left">Tipo</TableCell>
                    <TableCell align="left">Data</TableCell>
                    <TableCell align="left">Email</TableCell>
                    <TableCell align="center">Nome</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.users.map((user) => (
                    <TableRow key={user.ID}>
                        <ButtonGroup color="primary" aria-label="outlined primary button group">
                            <Button onClick={() => UpdateUser(user.id)}>Edit</Button>
                            <Button onClick={() => UserDelete(user.id)}>Del</Button>
                        </ButtonGroup>
                        <TableCell align="right">{user.phone_number}</TableCell>
                        <TableCell align="left">{user.type}</TableCell>
                        <TableCell align="left">{user.birth_date}</TableCell>
                        <TableCell align="left">{user.email}</TableCell>
                        <TableCell align="left">{user.name}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
            </TableContainer>
        </Container>
    );
}
  
export default GetUsers