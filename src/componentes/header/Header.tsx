import './Header.css'
import LinkNav from './../linknav/LinkNav'
import logo from './../img/Jaqueline.png'
function Header(){
    return(
        <header>
            <div>
            <div className="logo"><img src={logo}/></div>
            </div>
            <nav>
                <ul>
                    <li>
                        <LinkNav url='/home' texto='Home'/>
                    </li>
                    <li>
                        <LinkNav url='/noticia' texto='Notícia'/>
                    </li>
                    <li>
                        <LinkNav url='/sobre' texto='Sobre'/>
                    </li>
                    <li>
                        <LinkNav url='/contato' texto='Contato'/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
