import Header from './header/header';
import Navbar from './navbar/navbar';
import Section from './section/section';
import Doadores from './doadores/doadores'
import Orgaos from './orgaos/orgaos';
import Transplante from './transplantes/transplantes';
import Lista from './lista_espera/lista';
import './admin.css'
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
                <Lista />
            </Container>
        </div>
    )
}

export default Admin
