import express from 'express'; // Import express
import  productsRoutes from './routes/products.routes.js'; // Import second router
import DBconnect from './database.js';
import bodyParser from 'body-parser';

const app = express(); // Create express app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api',productsRoutes); // Parse JSON bodies
DBconnect(); // Connect to database 

app.listen(4000, () => {
  console.log('Server is listening on port 4000'); 
}); 