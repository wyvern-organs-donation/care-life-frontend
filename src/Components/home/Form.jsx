import "./Form.css"

export function Form(){
    return(
        <div id="form">
            <form>
                <h1>Tire suas dúvidas</h1>
                <input type="name" id="name" placeholder="Nome Completo"></input>
                <input type="email" id="email" placeholder="E-mail"></input>
                <input type="text" id="doubt" placeholder="Digite sua dúvida aqui"></input>
            </form>
        </div>
    )
}