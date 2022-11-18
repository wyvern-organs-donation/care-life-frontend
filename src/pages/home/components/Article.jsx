import React from 'react'
import iHealth from '../images/iHealth.svg'
import twoHeart from '../images/twoHeart.svg'
import idCard from '../images/idCard.svg'
import { Body1 } from './Body1'




export function Article() {
    return (
        <article>
            <section>
                <Body1 />
            </section>
            <section>
                <div>
                    <img src={iHealth} />
                    <h4>Reconhecimento</h4>
                    <p>Care Life é um dos finalistas do Prêmio iHealth...</p>
                    <button>Leia Mais</button>
                </div>
                <div>
                    <img src={ twoHeart } />
                    <h4>Por que é importante ser um doador de órgãos?</h4>
                    <p>Talvez não haja atitude mais nobre e humanitária do que resolver doar seus órgãos...</p>
                    <button>Leia Mais</button>
                </div>
            </section>                        
            <section>
                <div>
                    <img src={ idCard } />
                </div>
                <div>
                    <h4>Tenha uma Carteirinha de Doador de Orgãos ou Atualize Sua Carteirinha</h4>
                    <button>Registrar Carteirinha de Doador</button>
                    <botton>Atualizar Carteirinha de Doador</botton>
                </div>          
            </section>
        </article>

    );
}