import express from 'express'; // Import express
import  productsRoutes from './routes/products.routes.js'; // Import second router
import DBconnect from './database.js';

const app = express(); // Create express app
app.use(productsRoutes); // Parse JSON bodies
DBconnect(); // Connect to database 

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
}); 