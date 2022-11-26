import React, { Component, useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
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

class ModalOrgan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
    this.disabled = false;
  }

  setDisabled = (b) => {
    this.disabled = b;
  };

  toggle = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };

  submitForm = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    this.props.action(data.get("id"), data);
  };

  render() {
    const label = this.props.buttonLabel;

    let button = "";
    let title = "";

    let form = (
      <form onSubmit={this.submitForm} className="formName admin-form">
        <div className="inputs">
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12}>
              <input
                hidden={true}
                type="text"
                name="id"
                defaultValue={this.props.organ.id}
                id="id"
              />
              <label htmlFor="type">Tipo</label>
              <select
                name="type_id"
                disabled={this.disabled}
                defaultValue={this.props.organ.organ_types.id}
              >
                {this.props.organTypes.map((organ) => {
                  return (
                    <option key={organ.id} value={organ.id}>
                      {organ.name}
                    </option>
                  );
                })}
              </select>
            </Grid>
            <Grid item xs={12}>
              <label htmlFor="donor">Doador</label>
              <select
                name="donor_id"
                disabled={this.disabled}
                defaultValue={this.props.organ.users_organs_donorTousers.id}
              >
                {this.props.donors.map((donor) => {
                  return (
                    <option key={donor.id} value={donor.id}>
                      {donor.name}
                    </option>
                  );
                })}
              </select>
            </Grid>
            <Grid item xs={12}>
              <label htmlFor="institution_id">Instituição</label>
              <select
                name="institution_id"
                disabled={this.disabled}
                defaultValue={
                  this.props.organ.users_organs_institutionTousers.id
                }
              >
                {this.props.institutions.map((institution) => {
                  return (
                    <option key={institution.id} value={institution.id}>
                      {institution.name}
                    </option>
                  );
                })}
              </select>
            </Grid>
          </Grid>
        </div>
        <button hidden={this.disabled} className="login-btn" type="submit">
          Salvar
        </button>
      </form>
    );

    let deleteAction = (
      <>
        <p> Deseja realmente deletar esse órgão? </p>
        <button className="" onClick={this.toggle}>
          Cancelar
        </button>
        <button
          className=""
          onClick={() => this.props.action(this.props.organ.id)}
        >
          Confirmar
        </button>
      </>
    );

    let content = "";

    if (label === "Edit") {
      button = (
        <IconButton onClick={this.toggle}>
          <EditIcon />
        </IconButton>
      );
      title = "Editar Órgão";
      this.setDisabled(false);
      content = form;
    } else if (label === "Delete") {
      button = (
        <IconButton onClick={this.toggle}>
          <DeleteIcon />
        </IconButton>
      );
      title = "Deletar Órgão";
      content = deleteAction;
    } else {
      button = (
        <IconButton onClick={this.toggle}>
          <VisibilityIcon />
        </IconButton>
      );
      title = "Visualizar Órgão";
      this.setDisabled(true);
      content = form;
    }
    return (
      <div>
        {button}
        <Modal
          open={this.state.modal}
          onClose={this.toggle}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <button className="close" onClick={this.toggle}>
              &times;
            </button>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {title}
            </Typography>
            {content}
          </Box>
        </Modal>
      </div>
    );
  }
}

export default ModalOrgan;
