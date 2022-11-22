import useProducts from "../context/productContext";
import { Link } from "react-router-dom";
//import { useEffect } from "react";

const HomePages = () => {

  const { products } = useProducts();

  if(products.length === 0) {
    return <div>
      <h1>Loading...</h1>
    </div>
  } //si no hay productos, no se renderiza nada


  return (

    <div className="grid grid-cols-3 gap-4" >

      <Link to="/new-product" className="text-2xl font-bold text-center">New product</Link>

      {products.map((product) => ( //map para recorrer el array de productos
        <div key={product._id} >
          {product.name}
          {product.price}
          {product.description}
          {product.stock}
        </div>

      ))}
        

    </div>
  )
}

export default HomePages