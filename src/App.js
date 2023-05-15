import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Signup from './pages/Signup';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './components/PrivateRoute';
import UserHome from './pages/user-routes/UserHome';
import UserProvider from './context/UserProvider';
import AllProducts from './pages/user-routes/AllProducts';
import AllSellerProducts from './pages/seller-routes/AllSellerProducts';
import AddProducts from './pages/seller-routes/AddProducts';

function App() {
  return (

    <UserProvider>
    <BrowserRouter>
      <ToastContainer position='bottom-center' />

        <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/signup' element={<Signup/>}/>
          
          {/* USER */}
          <Route path='/user' element={<PrivateRoute/>}>

            {/* User Home */}
            <Route path='home' element={<UserHome/>} />
            {/* All Products */}
            <Route path='all-products/:categoryId' element={<AllProducts/>}/>

          </Route>

          {/* SELLER */}
          <Route path='/seller' element={<PrivateRoute/>}>

          {/* All Products */}
          <Route path='all-products' element={<AllSellerProducts/>}/>

          {/* Add Products */}
          <Route path='add-products' element={<AddProducts/>}/>

          </Route>

        </Routes>

    </BrowserRouter>
    </UserProvider>
  );
}

export default App;
