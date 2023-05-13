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

          <Route path='/user' element={<PrivateRoute/>}>

            {/* User Home */}
            <Route path='home' element={<UserHome/>} />

          </Route>

        </Routes>

    </BrowserRouter>
    </UserProvider>
  );
}

export default App;
