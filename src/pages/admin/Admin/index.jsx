import Header from '../components/Header';
import Navbar from '../components/WhiteNavbar';
import MainCard from './components/MainCard';
import WhiteCard from './components/WhiteCard';
import { Container } from 'react-bootstrap';
import './style.css'

function Admin() {
    return (
        <div className='rowC'>
            <Navbar />
            <Container className='background'>
                <Header />
                <MainCard />
                <div className='linha'>
                    <WhiteCard title="Doadores Cadastrados" />
                    <WhiteCard title="Orgãos Cadastrados" />
                    <WhiteCard title="Transplantes Realizados" />
                </div>
            </Container>
        </div>
    )
}

export default Admin
