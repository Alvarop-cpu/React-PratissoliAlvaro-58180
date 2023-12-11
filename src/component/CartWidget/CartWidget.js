import './CartWidget.css'
import cart from './assets/cart.svg'

const CartWidget = () => {
    return (
        <div className='CAR'>
             <img src={cart} alt="cart-widget" className='CAR2'/>
             0
        </div>
    )
}

export default CartWidget