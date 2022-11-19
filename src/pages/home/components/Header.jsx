import React from "react"
import { Link } from "react-router-dom"
import { Navbar } from "./Navbar"
import "./Header.css"

export function Header() {
    return(
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
              <Link to="/register"><button id='btSingin'>Seja um doador</button></Link>
            </div>
          </div>
        </header>
    )
}