import useProducts from "../context/productContext";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const HomePages = () => {

  const { getProducts, products } = useProducts();

  useEffect(() => { //useEffect para que se ejecute una vez que se renderice el componente
    getProducts();
  }, [getProducts]);


  return (
    <div>
      {products}
        

    </div>
  )
}

export default HomePages