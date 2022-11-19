import React from 'react'
import iHealth from '../images/iHealth.svg'
import twoHeart from '../images/twoHeart.svg'
import idCard from '../images/idCard.svg'
import { Body1 } from './Body1'
import './article.css'




export function Article() {
    return (
        <article>
            <div>
                <Body1 />
            </div>
            <section>
                <div>
                    <h2>Você pode se interessar por</h2>
                </div>
               <div className='divSection'>
                    <div>
                        <img src={iHealth} />
                        <h3>Reconhecimento</h3>
                        <p>Care Life é um dos finalistas do Prêmio iHealth...</p>
                        <button>Leia Mais</button>
                    </div>
                    <div>
                        <img src={ twoHeart } />
                        <h3>Por que é importante ser um doador de órgãos?</h3>
                        <p>Talvez não haja atitude mais nobre e humanitária do que resolver doar seus órgãos...</p>
                        <button>Leia Mais</button>
                    </div>
                </div>
            </section>                        
            <section>
                <div className='divSection'>
                    <div>
                        <img src={ idCard } />
                    </div>
                    <div>
                        <h3>Tenha uma Carteirinha de Doador de Orgãos ou Atualize Sua Carteirinha</h3>
                        <button>Registrar Carteirinha de Doador</button>
                        <botton>Atualizar Carteirinha de Doador</botton>
                    </div>
                </div>
            </section>
        </article>

    );
}