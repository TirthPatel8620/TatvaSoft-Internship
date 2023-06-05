import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './Page/Login';
// import Signup from './Page/Signup';
import SignIn from './Page/Signup';
import NotFound from './Page/Notfound';
import Cart from './Page/Cart';
import { ToastContainer } from 'react-toastify';
import BookCard from './Component/BookCard';
import AllProducts from './Page/AllProducts';
import { useState } from 'react';
import LoginBottomNav from './Component/LoginBottomNav';
import { EditProduct } from './Page/EditProduct';
import UpdateProfile from './Page/UpdateProfile';
import BooksPagList from './Page/Books';
import { AddProduct } from './Page/AddProduct';


const App = () => {

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path='/' element={ sessionStorage.getItem('user')?<AllProducts /> :<Login />} />
        <Route path='signup' element={ sessionStorage.getItem('user')?<AllProducts />:<SignIn />} />
        <Route path='cart' element={sessionStorage.getItem('user')?<Cart />:<Login />} />
        <Route path='/productlist' element={sessionStorage.getItem('user')?<AllProducts />:<Login />} />
        <Route path='/editbook' element={sessionStorage.getItem('user')?<EditProduct />:<Login />} />
        <Route path='/bookpaglist' element={sessionStorage.getItem('user')?<BooksPagList />:<Login />} />
        <Route path='/addproduct' element={sessionStorage.getItem('user')?<AddProduct />:<Login />} />
        <Route path='/updateprofile' element={sessionStorage.getItem('user')?<UpdateProfile />:<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <LoginBottomNav />
    </>
  );
}
export default App;

