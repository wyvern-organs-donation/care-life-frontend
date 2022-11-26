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

const CreationModal = ({
  isOpen,
  organTypes = [],
  donors = [],
  institutions = [],
  onClose,
  onSubmit,
}) => {
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
        <form onSubmit={submitForm} className="formName admin-form">
          <div className="inputs">
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={12}>
                <label htmlFor="type_id">Tipo</label>
                <select name="type_id">
                  {organTypes.map((organ) => {
                    return (
                      <option key={organ.id} value={organ.id}>
                        {organ.name}
                      </option>
                    );
                  })}
                </select>
              </Grid>
              <Grid item xs={12}>
                <label htmlFor="donor_id">Doador</label>
                <select name="donor_id">
                  {donors.map((donor) => {
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
                <select name="institution_id">
                  {institutions.map((institution) => {
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
          <button className="login-btn" type="submit">
            Salvar
          </button>
        </form>
      </Box>
    </Modal>
  );
};

export default CreationModal;
