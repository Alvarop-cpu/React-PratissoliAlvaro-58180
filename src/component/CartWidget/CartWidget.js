import './CartWidget.css'
import cart from './assets/cart.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {

    const { totalQuantity } = useContext (CartContext)

    return (
        <Link to='/cart' className={`CAR ${totalQuantity > 0 ? 'true' : 'false'}`}> 
             <img src={cart} alt="cart-widget" className='CAR2'/>
                {totalQuantity} 
        </Link>
    )
}

export default CartWidget