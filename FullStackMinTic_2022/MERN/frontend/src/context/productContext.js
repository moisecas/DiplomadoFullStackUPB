import { useState, useContext, createContext, useEffect } from "react";
import getProductsRequest from "../api/product"; //importar la petición get a la base de datos


export const productContext = createContext(); 

//utilizar los productos 
export const useProducts = () => {
  const context = useContext(productContext);
  return context;
}



//contexto para saber los estados 
export const ProductProvideer= (children) => {

  const [products, setProducts] = useState([]) //variable products y setProducts para cambiar el estado de products
  console.log(products) 

  //traer los productos del back 
  const getProducts = async () => {
    const response = await getProductsRequest();
    setProducts(response.data);  
    
  }

  useEffect(() => { //useEffect para que se ejecute una vez que se renderice el componente
    getProducts();
  }, [getProducts])

  return <productContext.Provider value={{
    products,
    setProducts, //compartiendo el estado de products
    getProducts //compartiendo la función getProducts
  }} > 
     {children}
  </productContext.Provider>
   
  
 
}
 


 
