import {useState, useEffect} from 'react';
import {collection, getDocs} from 'firebase/firestore';
import {getData} from '../firebase/index';
import {Link} from 'react-router-dom'



export default function ItemContainer(){
    const [products, setProducts] = useState ([])
    const getProductos= async ()=>{
        try{

            const productsCollection = collection(getData(),'productos');
            const productsSnapshot = await getDocs(productsCollection);
            const productsList = productsSnapshot.docs.map(doc => doc.data());
            console.log(productsList)
            setProducts(productsList)


        }
        catch(error){
            alert(error)
        }
    }
    useEffect(()=>{
        getProductos()
    },[])
    
    return(
        <>
            <h1>lista de productos</h1>
            {products.map(productsItem=>(
                <div style={{border: '1px solid black', margin:'1%', padding:"20%" }}>
                    <h2>Nombre: {productsItem.title} </h2>
                    <h3>Categoría {productsItem.category}</h3>
                    <h3>Precio: {productsItem.price}</h3>
                    <button><Link to={`/producto-detalle/${productsItem.id}`}>Ver detalle del producto</Link></button>
                </div>
                ))}
        </>
    )

}
