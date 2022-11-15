import React, { useEffect, useState } from "react";
import Header from '../components/Header';
import Navbar from '../components/BlueNavbar';
import Search from '../components/Search';
import Button from './components/Button';
import GetUsers from './components/users';
import './style.css'
import { Container } from 'react-bootstrap';
import api from "../../../services/api";

function AdminUser() {
    const [users, setUser] = useState([]);

    useEffect(() => {
        api
        .get("/user")
        .then((response) => setUser(response.data))
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
    }, []);
    
    return (
        <div className='rowC'>
            <Navbar />
            <Container className='background'>
                <Header />
                <Search />
                <Button />
                <GetUsers users={users} />
            </Container>
            
        </div>
    )
}

export default AdminUser;
