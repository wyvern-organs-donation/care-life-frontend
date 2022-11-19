import React, { useEffect, useState } from "react";
import Header from '../components/Header';
import Navbar from '../components/WhiteNavbar';
import MainCard from './components/MainCard';
import WhiteCard from './components/WhiteCard';
import { Container } from 'react-bootstrap';
import api from "../../../services/api";
import './style.css';

function Admin() {
    const [users, setUser] = useState([]);
    const [receptor, setReceptor] = useState([]);
    const [organs, setOrgan] = useState([]);

    useEffect(() => {
        UserTypeGet();
        OrganGet();
    }, []);
    

    const DoadorGet = (id) => {
        api
        .get("/user/filter", { params: { user_type_id: id } })
        .then((response) => setUser(response.data))
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
    }

    const ReceptorGet = (id) => {
        api
        .get("/user/filter", { params: { user_type_id: id } })
        .then((response) => setReceptor(response.data))
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
    }

    const OrganGet = () => {
        api
        .get("/organ")
        .then((response) => setOrgan(response.data))
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
    }


    const UserTypeGet = () => {
        api
        .get("/typeUser")
        .then((response) => {
            var typeid = 1;
            response.data.forEach(type => {
                if (type.name == 'Doador') {
                    typeid = type.id
                    DoadorGet(typeid);
                } else if (type.name == 'Receptor') {
                    typeid = type.id
                    ReceptorGet(typeid);
                }
            });}
        )
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
    }
    
    return (
        <div className='rowC'>
            <Navbar />
            <Container className='admin-background'>
                <main className="admin-main">
                <Header />
                <MainCard />
                <div className='cards-row'>
                    <WhiteCard title="Doadores Cadastrados" imgSrc="/src/assets/admin/Group.svg" count={users.length} />
                    <WhiteCard title="Orgãos Cadastrados" imgSrc="/src/assets/admin/heart.svg"  count={organs.length} />
                    <WhiteCard title="Receptores Cadastrados" imgSrc="/src/assets/admin/registered-receivers.svg"  count={receptor.length} />
                </div>
                </main>
            </Container>
        </div>
    )
}

export default Admin
