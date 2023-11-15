import CartWidget from "../CartWidget/CartWidget";
import "bulma/css/bulma.css";

const NavBar = () => {
    return (
        <nav className="navbar has-background-grey-dark" role="navigation" aria-label="main navigation">
            
            <div className="navbar-item navbar-start has-text-light">
                <h3>StreetFlow</h3>
            </div>

            <div className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item has-text-light">
                        Remeras
                    </a>
                    <a className="navbar-item has-text-light">
                        Bermudas
                    </a> 
                    <a className="navbar-item has-text-light">
                        Accesorios
                    </a>
                </div>
            </div>
            <div className="has-text-light">
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar;