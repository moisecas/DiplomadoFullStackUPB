import HomePages from './pages/HomePages';
import NewProductPage from './pages/NewProductPage';
import NotFound from './pages/NotFound'; 
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'; //importar el router del dom
import './App.css';

function App() {
  return (
    <Router> 
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/new-product" element={<NewProductPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    </Router> 


    
    
  );
} 

export default App;
