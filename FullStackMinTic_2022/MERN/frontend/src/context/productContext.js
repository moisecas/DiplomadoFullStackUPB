//contexto para saber los estados 
import { useState, createContext, useContext } from "react"; 


//creamos el contexto
export const ProductContext = createContext();

//creamos el provider
export const ProductProvider = (props) => {
    const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const response = await fetch("http://localhost:5000/products");
    const data = await response.json();
    setProducts(data);
  }
    return (
        <ProductContext.Provider value={{products, getProducts}}>
            {props.children}
        </ProductContext.Provider>
    )
} 
 


 
