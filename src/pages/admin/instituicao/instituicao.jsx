import Header from '../../../componets/admin/instituicao/header/header';
import Navbar from '../../../componets/admin/instituicao/navbar/navbar';
import Section from '../../../componets/admin/instituicao/section/section';
import Doadores from '../../../componets/admin/instituicao/doadores/doadores'
import Orgaos from '../../../componets/admin/instituicao/orgaos/orgaos';
import Transplante from '../../../componets/admin/instituicao/transplantes/transplantes';
import Lista from '../../../componets/admin/instituicao/lista_espera/lista';
import './instituicao.css'
import { Container } from 'react-bootstrap';

function Instituicao() {
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

export default Instituicao
