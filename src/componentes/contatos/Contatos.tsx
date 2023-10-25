import "./Contatos.css";
function Contato(){
    return(
        <div className="Form">
            <div className="Form2">
                <h1 className="titulo">Escreva sua Mensagem</h1>
            <input className="nome" type="text" placeholder="Nome"/>
            <input className="email" type="text" placeholder="E-mail"/>
            <input className="telefone" type="text" placeholder="Telefone" />
            <input className="campo-mensagem" type="text" placeholder="Escreva sua mensagem aqui"/>
            <button className="button-envio">Enviar</button>
            </div>
        </div>
    )
}
export default Contato