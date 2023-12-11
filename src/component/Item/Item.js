import './Item.css'
import { Link } from "react-router-dom";

const Item = ({id, tittle, img, price, stock}) => {
    return (
        <div className='Card'>
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {tittle}
                </h2>
            </header>
            <picture>
                <img src={img} alt={tittle} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Precio: ${price}
                </p>
                <p className="Info">
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className="ItemFooter">
                <Link to={`/item/${id}`} className='OptionD'>Ver detalle</Link>
            </footer>
        </article>
        </div>
    )
}

export default Item;