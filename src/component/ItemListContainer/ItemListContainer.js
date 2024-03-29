import { useState, useEffect } from "react";
// import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";

import { useParams } from "react-router-dom";

import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from "../../firebase/firebaseConfig";


const ItemListContainer = ({greeting}) => {
    const [Productos, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() =>{
        setLoading(true)

        const collectionRef = categoryId ? query(collection(db, 'Productos'), where ('category', '==', categoryId)) : collection(db, 'Productos')

        getDocs(collectionRef)
        
        .then(response => {
        
            const ProductosAdapted = response.docs.map(doc => {
        
                const data = doc.data()
        
                return{ id: doc.id, ...data}
        
            })
                setProducts(ProductosAdapted)
        
            })
        
            .catch(error => {
        
                console.log(error)
            })
        
            .finally(() => {
        
                setLoading(false)
        
            })
            
    }, [categoryId])

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={Productos}/>
        </div>
    )
}

export default ItemListContainer;