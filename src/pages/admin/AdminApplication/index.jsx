import Header from '../components/Header';
import Navbar from '../components/BlueNavbar';
import Search from '../components/Search';
import './style.css'

function AdminApplication() {
    return (
        <div className='rowC'>
            <Navbar />
            <div className='background'>
                <Header />
                <Search title="Aplicação" />
            </div>
        </div>
    )
}

export default AdminApplication
