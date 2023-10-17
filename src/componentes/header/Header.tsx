import './Header.css'
import Link from './../link/Link'
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
                        <Link texto='Home'/>
                    </li>
                    <li>
                        <Link texto='Notícia'/>
                    </li>
                    <li>
                        <Link texto='Sobre'/>
                    </li>
                    <li>
                        <Link texto='Contato'/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
