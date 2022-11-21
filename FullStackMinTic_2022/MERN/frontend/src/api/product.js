//trae información del back 
import axios from "axios"; 

//por medio del proxy en el package.json del front se puede acceder a la ruta del back
export const getProductsRequest = async () => await axios.get("/api/products"); //petición get a los productos de mi base de datos, ruta establecida desde el back 

