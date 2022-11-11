import Header from '../../../componets/admin/instituicao/header/header';
import Navbar from '../../../componets/admin/instituicao/navbar/navbar';
import Buscar from '../../../componets/admin/instituicao_user/buscar/buscar';
import Doadores from '../../../componets/admin/instituicao/doadores/doadores'
import Orgaos from '../../../componets/admin/instituicao/orgaos/orgaos';
import Transplante from '../../../componets/admin/instituicao/transplantes/transplantes';
import Lista from '../../../componets/admin/instituicao/lista_espera/lista';
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
