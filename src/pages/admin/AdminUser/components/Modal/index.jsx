import React, { Component } from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Grid from '@mui/material/Grid';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

class ModalUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: false
        }
    }

    toggle = () => {
        this.setState(prevState => ({
          modal: !prevState.modal
        }))
        console.log(this.state.modal)
      }

    submitForm = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        this.props.action(data.get('id'), data)
    }

    render() {

        const label = this.props.buttonLabel

        let button = ''
        let title = ''
        let disabled = false

        if(label === 'Edit'){
            button = <IconButton onClick={this.toggle}><EditIcon /></IconButton>
            title = 'Editar Usuário'
            disabled=false
        } else {
            button = <IconButton onClick={this.toggle}><VisibilityIcon /></IconButton>
            title = 'Visualizar Usuário'
            disabled=true
        }
        return(
            <div>
                {button}
                <Modal
                    open={this.state.modal}
                    onClose={this.toggle}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    >
                    <Box sx={style}>
                        <button className="close" onClick={this.toggle}>&times;</button>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                        {title}
                        </Typography>
                        <form onSubmit={this.submitForm} className="formName">
                            <div className="inputs">
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid item xs={6}>
                                    <input
                                        hidden={true}
                                        type="text"
                                        name="id"
                                        defaultValue={this.props.user.id}
                                        id="id"
                                    />
                                    <label htmlFor="name">Nome</label>
                                    <input
                                        disabled={disabled}
                                        type="text"
                                        name="name"
                                        defaultValue={this.props.user.name}
                                        id="name"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <label htmlFor="email">Email</label>
                                    <input
                                        disabled={disabled}
                                        type="email"
                                        name="email"
                                        defaultValue={this.props.user.email}
                                        id="email"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <label htmlFor="birth_date">Data de Nascimento</label>
                                    <input
                                        disabled={disabled}
                                        type="text"
                                        name="birth_date"
                                        defaultValue={this.props.user.birth_date.split("T")[0].split('-').reverse().join('-')}
                                        id="birth_date"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <label htmlFor="phone_number">Contato</label>
                                    <input
                                        disabled={disabled}
                                        type="text"
                                        name="phone_number"
                                        defaultValue={this.props.user.phone_number}
                                        id="phone_number"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <label htmlFor="cpf">Documento</label>
                                    <input
                                        disabled={disabled}
                                        type="text"
                                        name="cpf"
                                        defaultValue={this.props.user.cpf}
                                        id="cpf"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <label htmlFor="adress">Endereço</label>
                                    <input
                                        disabled={disabled}
                                        type="text"
                                        name="adress"
                                        defaultValue={this.props.user.adress}
                                        id="adress"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <label htmlFor="city">Cidade</label>
                                    <input
                                        disabled={disabled}
                                        type="text"
                                        name="city"
                                        defaultValue={this.props.user.city}
                                        id="city"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <label htmlFor="state">Estado</label>
                                    <input
                                        disabled={disabled}
                                        type="text"
                                        name="state"
                                        defaultValue={this.props.user.state}
                                        id="state"
                                    />
                                </Grid>
                            </Grid>
                            </div>
                            <button hidden={disabled} className="login-btn" type="submit">Salvar</button>
                        </form>
                    </Box>
                </Modal>
            </div>
        );
    }
}

export default ModalUser
