import { Router } from "express";  // Import Router from express
import { createProduct, getProducts, getProductById, 
    updateProductById, deleteProductById } from "../controllers/productController.js"; // Import controller functions

const router = Router(); // Create router 

// Define routes CRUD operations
router.get('/products', getProducts);

router.get('/products/:id', getProductById);

router.post('/products', createProduct);

router.put('/products/:id', updateProductById);

router.delete('/products/:id', deleteProductById);



export default router; // Export router para que pueda ser usado en otros archivos