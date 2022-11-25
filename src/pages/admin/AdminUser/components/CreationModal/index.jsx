import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CreationModal = ({ isOpen, onClose, onSubmit }) => {
  const submitForm = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    onSubmit(data);
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <button className="close" onClick={onClose}>
          &times;
        </button>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Criar Órgão
        </Typography>
        <form onSubmit={submitForm} className="formName">
          <div className="inputs">
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <label htmlFor="name">Nome</label>
                <input type="text" name="name" id="name" />
              </Grid>
              <Grid item xs={6}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
              </Grid>
              <Grid item xs={6}>
                <label htmlFor="birth_date">Data de Nascimento</label>
                <input type="text" name="birth_date" id="birth_date" />
              </Grid>
              <Grid item xs={6}>
                <label htmlFor="phone_number">Contato</label>
                <input type="text" name="phone_number" id="phone_number" />
              </Grid>
              <Grid item xs={6}>
                <label htmlFor="cpf">Documento</label>
                <input type="text" name="cpf" id="cpf" />
              </Grid>
              <Grid item xs={6}>
                <label htmlFor="adress">Endereço</label>
                <input type="text" name="adress" id="adress" />
              </Grid>
              <Grid item xs={6}>
                <label htmlFor="city">Cidade</label>
                <input type="text" name="city" id="city" />
              </Grid>
              <Grid item xs={6}>
                <label htmlFor="state">Estado</label>
                <input type="text" name="state" id="state" />
              </Grid>
            </Grid>
          </div>
          <button className="login-btn" type="submit">
            Salvar
          </button>
        </form>
      </Box>
    </Modal>
  );
};

export default CreationModal;
