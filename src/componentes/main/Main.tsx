import { useState } from 'react'
import Projeto from '../projetos/Projeto'
import './Main.css'
type ProjetoType = {
    id:number,
    titulo:string,
    descricao:string,
    imagem:string
}

export default function Main() {
  

    const [texto,setTexto]=useState("")

    const projetos:ProjetoType[] = [
        {
            id:1,
            titulo:'Festival de Arte e cultura',
            descricao:"O Festival de Arte e Cultura do IFMS é um evento de extensão realizado anualmente que busca estimular o desenvolvimento de atividades culturais e artísticas, além de manifestações populares e eruditas.",
            imagem: "festival.png"
        },
        {
            id:2,
            titulo:'Ritmos da vida',
            descricao:'Projeto realizado com o professor Marcio Miranda, onde discutimos uma vez na semana sobre a vida no ifmaker.',
            imagem:"ritmos.avif"
        },
        {
            id:3,
            titulo:'Massas Michelotto',
            descricao:'Site que criamos no figma para a venda de bolos, brigadeiros, ovos de páscoa e outros doces',
            imagem:"massas.png"
        },

        {
            id:4,
            titulo:'Clube de ciências',
            descricao:'Um projeto voltado aos estudantes de todas as séries dos cursos técnicos integrados, com o objetivo de estimular o desenvolvimento do raciocínio lógico e do autoconhecimento, melhorar o rendimento escolar, além de prepará-los para a maior olimpíada científica do Brasil, a Olimpíada Nacional de Ciências.',
            imagem:"ciencias.jpg "
        }
    ]






    function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
      
        setTexto(e.target.value)
    }
    return (
        <>
            <div className="campo_pesquisa">
                <p>Pesquise um Projeto</p>
                <input type="text" 
                       className='botao_pesquisa'
                       placeholder='Pesquise'
                       onChange={TrataTexto} />
                {texto && <p>Resultados Para: {texto} </p>}
            </div>
            <main className="content-main">
               
                {
                    projetos.filter((projeto)=>projeto.titulo.toLowerCase().includes(texto)).map(
                        (projeto)=>
                            <Projeto
                                key={projeto.id}
                                descricao={projeto.descricao}
                                titulo={projeto.titulo}
                                imagem={projeto.imagem}
                            />
                    )
                }

                
            </main>
        </>
    )
}