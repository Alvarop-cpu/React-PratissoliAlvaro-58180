import './CartItem.css'
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const CartItem = ({ tittle, price, id, quantity }) => {

  const { removeItem } = useContext(CartContext)

  return (
    <div className="ProductoEnCarrito">
      <h2 >{tittle}</h2>
      <p>Cantidad: {quantity}</p>
      <p>Subtotal: ${price * quantity}</p>
      <button className='Button1' onClick={() => removeItem(id)}>Eliminar</button>

    </div>
  )
}

export default CartItem;