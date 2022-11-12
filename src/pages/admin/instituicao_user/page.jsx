import Header from '../../../componets/admin/instituicao/header/header';
import Navbar from './../../../componets/admin/admin_aplicacao/navbar/navbar';
import Buscar from '../../../componets/admin/instituicao_user/buscar/buscar';
import Button from '../../../componets/admin/instituicao_user/buttons/buttons';
import './page.css'
import { Container } from 'react-bootstrap';

function InstituicaoUser() {
    return (
        <div className='rowC'>
            <Navbar />
            <Container className='background'>
                <Header />
                <Buscar />
                <Button />
            </Container>
        </div>
    )
}

export default InstituicaoUser
