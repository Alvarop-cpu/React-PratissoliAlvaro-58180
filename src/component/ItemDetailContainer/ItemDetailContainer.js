import './ItemDetailContainer.css'
import { useState, useEffect } from "react";

import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';

const ItemDetailContainer = ({greeting}) => {
    const [Productos, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'Productos', itemId)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const ProductosAdapted = {id: response.id, ...data}
                setProduct(ProductosAdapted)
            }) 
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])

    return (
        <div className="ItemDetailContainer">
            <ItemDetail {...Productos}/>
        </div>
    )
}

export default ItemDetailContainer;
