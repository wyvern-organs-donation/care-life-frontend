import { Header } from "./Header"
import { Form } from "./Form"
import { Body1 } from "./Body1"
import { Footer } from "./Footer"

export function Home() {
    return(
      <div className="Home">
        <Header />
        <Form />
        <Body1 />
        <Footer />
      </div>
  );
}