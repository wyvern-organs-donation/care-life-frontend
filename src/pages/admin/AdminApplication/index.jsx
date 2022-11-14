import Header from '../../../componets/admin/instituicao/header/header';
import Navbar from '../../../componets/admin/admin_aplicacao/navbar/navbar';
import Buscar from '../../../componets/admin/instituicao_user/buscar/buscar';
import './style.css'
import { Container } from 'react-bootstrap';

function AdminApplication() {
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

export default AdminApplication
