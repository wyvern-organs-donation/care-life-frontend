import React from "react";
import iHealth from "../images/iHealth.svg";
import twoHeart from "../images/twoHeart.svg";
import idCard from "../images/idCard.svg";
import "./Article.css";

export function Article() {
  return (
    <div id="article">
      <div>
        <p className="h2">Você pode se interessar por</p>
      </div>
      <div className="section1">
        <div className="wD">
          <img className="imgArt" src={iHealth} />
          <p className="h3-1">Reconhecimento</p>
          <p>Care Life é um dos finalistas do Prêmio iHealth...</p>
          <button className="rM">
            <a
              className="btnRC"
              href="https://www.ihealthunifiedcare.com"
              target="_blank"
            >
              Leia Mais
            </a>
          </button>
        </div>
        <div className="wD">
          <img className="imgArt" src={twoHeart} />
          <p className="h3-1">Por que é importante ser um doador de órgãos?</p>
          <p>
            Talvez não haja atitude mais nobre e humanitária do que resolver
            doar seus órgãos...
          </p>
          <button className="rM">
            <a
              className="btnRC"
              href="https://www.prosaude.org.br/vida-saudavel/por-que-as-doacoes-de-orgaos-sao-tao-importantes/"
              target="_blank"
            >
              Leia Mais
            </a>
          </button>
        </div>
      </div>
      <div className="section2">
        <div>
          <img src={idCard} />
        </div>
        <div>
          <p className="h3">
            Tenha uma Carteirinha de Doador de Órgãos ou Atualize Sua
            Carteirinha
          </p>
          <p>
            <button className="btnSingin">
              <a
                className="btnRC"
                href="https://www.adote.org.br/register"
                target="_blank"
              >
                Registrar Carteirinha de Doador
              </a>
            </button>
          </p>
          <p>
            <button className="btnSingin">
              <a
                className="btnRC"
                href="https://www.adote.org.br/register"
                target="_blank"
              >
                Atualizar Carteirinha de Doador
              </a>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
