import React, { useEffect, useState } from "react";
import Header from '../components/Header';
import Navbar from '../components/BlueNavbar';
import Search from '../components/Search';
import ButtonsLine from '../components/ButtonsLine';
import GetUsers from './components/users';
import './style.css';
import api from "../../../services/api";

function AdminUser() {
    const [users, setUser] = useState([]);

    useEffect(() => {
        UsersGet()
    }, []);

    const UsersGet = () => {
        api
        .get("/user")
        .then((response) => setUser(response.data))
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
    }

    const UpdateUser = (id, data) => {
        api
        .put("/user/"+id, data, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
        .then(
            () => {
                UsersGet();
            }
        ).catch((err) => {
            console.error("ops! ocorreu um erro " + err);
        });  
    }
    
    const UserDelete = (id) => {
        api
        .delete("/user/"+id)
        .then(
            () => {
                UsersGet();
            }
        ).catch((err) => {
            console.error("ops! ocorreu um erro " + err);
        });  
    }
    
    return (
        <div className='rowC'>
            <Navbar />
            <div className='admin-background'>
                <Header />
                <Search title="Instituições" />
                <ButtonsLine />
                <GetUsers users={users} userDelete={UserDelete} updateUser={UpdateUser}/>
            </div>
            
        </div>
    )
}

export default AdminUser;
