import React from "react";
import Header from "../../components/header";
// import { Navbar } from "../../../home/components/Navbar";
import Picture from "../../components/picture";
import api from "../../../../services/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../login/index.css";

export default function ConfirmRegister() {

  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {

    const userId = localStorage.getItem("userId");
        
    try {
      await api.get('/user')
    .then((res) => { 
      setUser(res.data);
      res.data.map((e) => {
        if (e.id == userId && e.status) {
          navigate('/login');
        }
      })
      console.log(res.data);
    })
    } catch (err) {
      console.log(err);
    }
  }

  return (
    
    <div className="container">
      <Header />
      <div className="Main">
        <Picture />
        <form className="formName">
          <h2>Complete seu cadastro</h2>
          <div className="text">
            <p>
              Foi enviado um link de confirmação de registro, acesse-o para
              continuar!
            </p>
          </div>
          <div className="thanks">
            <h3>
              Agradecemos a iniciativa de cadastro. Doe órgãos, salve vidas!!
            </h3>
          </div>
        </form>
      </div>
    </div>
  );
}

