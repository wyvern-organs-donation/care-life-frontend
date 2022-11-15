import Header from '../components/Header/header';
import Navbar from '../components/BlueNavbar/navbar';
import Buscar from './components/buscar/buscar';
import Button from './components/buttons/buttons';
import './style.css'
import { Container } from 'react-bootstrap';

function AdminUser() {
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

export default AdminUser;
