import './MenuButton.css'
import {Link} from 'react-router-dom'

const MenuButton = () => {

        let sidenav = document.getElementById("mySidenav");
        // let openBtn = document.getElementById("openBtn");
        // let closeBtn = document.getElementById("closeBtn");

          /* Set the width of the side navigation to 250px */
          const openNav = () => {
            console.log("testopeNav")
          sidenav.classList.add("active");
          }

          /* Set the width of the side navigation to 0 */
          const closeNav = () => {
          sidenav.classList.remove("active");
          }

    return (
        <div className='grosSandwich'>
            <nav>
                <div id="mySidenav" className="sidenav">
                    <Link id="closeBtn" className="close" onClick={() => closeNav()}>x</Link>
                    <ul>
                        <li><Link to ='/test'>Tournaments</Link></li>
                        <li><a href="https://developer.mozilla.org/fr/">Schedule</a></li>
                        <li><Link href="https://developer.mozilla.org/fr/">Characters</Link></li>
                        <li><Link href="https://developer.mozilla.org/fr/">Contact</Link></li>
                    </ul>
                </div>

                <Link id="openBtn" onClick={() => openNav()}>
                    <span className="burger-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </Link>
            </nav>
        </div>
    )
}

export default MenuButton