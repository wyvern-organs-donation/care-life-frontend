import Header from '../components/Header';
import Navbar from '../components/BlueNavbar/navbar';
import Buscar from '../AdminUser/components/buscar/buscar';
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
