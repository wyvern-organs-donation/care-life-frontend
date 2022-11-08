import img from './imagemMedico.png'



export function Header() {
    return(
        <header>            
                <h1>Doe órgãos  a vida precisa continuar</h1>
                <p>Milhares de brasileiros esperam por um transplante. 
                    Ser um doador é um ato de Amor e Solidariedade.</p>
                    <img src={img} /> 
        </header>
  );
}