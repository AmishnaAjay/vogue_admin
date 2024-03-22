
import './App.css';
import Signin from './Screens/SignIn/SignIn';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserReg from './Screens/UserReg/UserReg';
import Product from './Screens/Product/Product/Product';
import AddProduct from './Screens/Product/AddProduct/AddProduct';

function App() {

  return (
    <div className="App">
        
    <Router>
        <Routes>
           
            <Route
                path="/Signin"
                element={<Signin/>}
            />
           <Route 
                path="/UserReg"
                element={<UserReg/>}
           />
            <Route 
                path="/Product"
                element={<Product/>}
           />
           <Route 
                path="/AddProduct"
                element={<AddProduct/>}
           />
        </Routes>
    </Router>
</div>
  );
}

export default App;
