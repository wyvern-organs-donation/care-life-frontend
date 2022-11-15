import { Navbar } from "./Navbar";
import './Home.css';

export function Home() {
    return(
      <div className="Home">
        <header>
          <Navbar />
          <div id='container'>
            <div id='text'>
              <div id='text2'>
                <p>Doe órgãos, a</p>
                <p>vida precisa</p>
                <p>continuar</p>
              </div>
              
              <div id='message'>
                <p>Milhares de brasileiros esperam por um transplante.</p>
                <p>Ser um doador é um ato de Amor e Solidariedade.</p>
              </div>
              <button id='btSingin'>Seja um doador</button>
            </div>
          </div>
        </header>
      </div>
  );
}