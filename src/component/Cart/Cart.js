import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if(totalQuantity === 0) {
        return (
            <div>
                <h1>No hay productos en carrito</h1>
                <Link to='/' className='Option'>productos</Link>
            </div>
        )
    }

    return ( 
        <div className='BotonesCarrito'>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <button onClick={() => clearCart()} className='Button'>Vaciar carrito</button>
            <Link to='/checkout' className='Option'>Finalizar compra</Link>
        </div>
    )
}

export default Cart;