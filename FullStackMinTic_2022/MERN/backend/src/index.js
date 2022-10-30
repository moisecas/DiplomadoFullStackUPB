const app = require('./app'); // Import express app
const connectDB = require('./database'); // Import database connection

// Connect to database
connectDB(); 




// Start server
app.listen(3000, () => { //cuando inicie ejecuta una funcion que muesta un mensaje
  console.log('Server listening on port 3000');
}); 