
import {useState, useEffect} from 'react';
import {collection, getDocs} from 'firebase/firestore';
import {getData} from '../firebase/index';
import{useParams, Link} from 'react-router-dom';



export default function ItemDetailContainer(){
    const {id } = useParams();
    const [producto, setProducto] = useState ([])
    const getProducto= async ()=>{
        try{

            const productsCollection = collection(getData(),'productos')
            const productsSnapshot = await getData(productsCollection).where('id', '==', '1').get()
            const productsList = productsSnapshot.docs.map(doc => doc.data());
            setProducto(productsList)
            console.log(productsList)


        }
        catch(error){
            alert(error)
        }
    }
    useEffect(()=>{
        getProducto()
    },[])
    
    return(
        <>
            
            {producto.map(productoItem=>(
                <div style={{border: '1px solid black', margin:'1%', padding:"20%" }}>
                    <h1>Nombre: {productoItem.title} </h1>
                    <img src={productoItem.image}></img>
                    <h3>Categoría {productoItem.category}</h3>
                    <h3>Precio: {productoItem.price}</h3>
                </div>
                ))}
        </>
    )

}
