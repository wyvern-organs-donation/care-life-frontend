import Header from '../components/Header';
import Navbar from '../components/BlueNavbar';
import Search from '../components/Search';
import Button from './components/Button';
import './style.css'
import { Container } from 'react-bootstrap';

function AdminUser() {
    return (
        <div className='rowC'>
            <Navbar />
            <Container className='background'>
                <Header />
                <Search />
                <Button />
            </Container>
        </div>
    )
}

export default AdminUser;
