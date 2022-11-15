import Header from '../components/Header/header';
import Navbar from '../components/WhiteNavbar/navbar';
import Section from './components/section/section';
import Doadores from './components/doadores/doadores'
import Orgaos from './components/orgaos/orgaos';
import Transplante from './components/transplantes/transplantes';
import './style.css'
import { Container } from 'react-bootstrap';

function Admin() {
    return (
        <div className='rowC'>
            <Navbar />
            <Container className='background'>
                <Header />
                <Section />
                <div className='linha'>
                    <Doadores />
                    <Orgaos />
                    <Transplante />
                </div>
            </Container>
        </div>
    )
}

export default Admin
