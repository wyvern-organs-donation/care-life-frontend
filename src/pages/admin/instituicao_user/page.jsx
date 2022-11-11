import Header from '../../../componets/admin/instituicao/header/header';
import Navbar from '../../../componets/admin/instituicao/navbar/navbar';
import Buscar from '../../../componets/admin/instituicao_user/buscar/buscar';
import './page.css'
import { Container } from 'react-bootstrap';

function InstituicaoUser() {
    return (
        <div className='rowC'>
            <Navbar />
            <Container className='background'>
                <Header />
                <Buscar />
            </Container>
        </div>
    )
}

export default InstituicaoUser
