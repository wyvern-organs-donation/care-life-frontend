import React from "react"
import { Header } from "./Header"
import { Body1 } from "./Body1"
import { Article } from "./Article"
import { Footer } from "./Footer"

import "./Home.css"

export function Home() {
    return(
        <div id="home">
          <Header />
          <Body1 />
          <Article />
          <Footer />
        </div>
    )
}