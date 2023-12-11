import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='NavBar'>
            <Link to="/">
                <h3 className='Inicio'>FlowStreet clothes</h3>
            </Link>
            <div className='Categories'>
                <NavLink to={`/category/Remeras`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Remeras</NavLink>
                <NavLink to={`/category/Bermudas`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Bermudas</NavLink>
                <NavLink to={`/category/Accesorios`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Accesorios</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;