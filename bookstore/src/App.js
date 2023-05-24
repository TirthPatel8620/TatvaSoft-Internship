import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './Page/Login';
// import Signup from './Page/Signup';
import SignIn from './Page/Signup';
import NotFound from './Page/Notfound';
import Cart from './Page/Cart';
import { TextField, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

const App = () => {
  return (
    <>
      <div className='top-navbar1'>
        <img
          // src='https://image4.owler.com/logo/tatvasoft_owler_20160614_065459_original.png'
          src='https://media.licdn.com/dms/image/C4D0BAQER56B5tk5JzA/company-logo_200_200/0/1519875638180?e=2147483647&v=beta&t=3O05G2LeTIHMXdERPXsSa2o0mogxmD20kDEbgTFMsvY'
          alt='Tatvasoft Logo'
          className='logo-style'
        />
        <div className='nav1-links'>

          <Link to='/' className='link-style' > Signin </Link>|
          <Link to='/signup' className='link-style' >Signup</Link>
          <button className='cart-nav-btn' >
            {/* <svg data-testid="ShoppingCartIcon"></svg> */}
            <ShoppingCartIcon style={{
              fontSize: 'small',
              color: '#f14d54',
              marginRight: '2px',
            }} />

            Cart</button>
          {/* <Link to='/err' className='link-navStyle' >404</Link> */}
        </div>
      </div>
      <div className='top-navbar2'>
        <TextField id="outlined-basic" name='search' label="What are you looking for... " variant="outlined"
          style={{
            width: '422px',
            borderWidth: '0.5px',
            color: 'rgb(33,33,33)',
            backgroundColor: 'white',
            position: 'relative',

            // left:'0%',

          }}
          size='small'
        />
        <Button variant="contained" color="success"
          style={{
            marginLeft: '10px',
          }}
        >
          <SearchIcon />
          Search</Button>
        <Button variant="contained"
          style={{
            marginLeft: '10px',
            backgroundColor: '#f14d54',
          }}
        >
          Cancel</Button>
      </div>
      <Routes>
        <Route path='/' element={<Login />} />
        {/* <Route path='/signup' element={<Signup />} /> */}
        <Route path='signup' element={<SignIn />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <div className='bottom-navbar'>
        <img src='https://image4.owler.com/logo/tatvasoft_owler_20160614_065459_original.png'
          alt='Tatvasoft Logo'
          className='bottom-logo-style'
        />
      </div>
    </>
  );
}
export default App;
