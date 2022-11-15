import Header from '../components/Header';
import Navbar from '../components/BlueNavbar';
import Search from '../components/Search';
import './style.css'
import { Container } from 'react-bootstrap';

function AdminApplication() {
    return (
        <div className='rowC'>
            <Navbar />
            <Container className='background'>
                <Header />
                <Search />
            </Container>
        </div>
    )
}

export default AdminApplication
