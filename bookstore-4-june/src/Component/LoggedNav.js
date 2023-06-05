import React, { useEffect, useState } from 'react'
import '../App.css';
import { Link } from 'react-router-dom';
import { TextField, Button, Grid } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BaseUrl } from './Const';




const LogeedNav = () => {
    const [books, setBooks] = useState([]);
    const [hasval, setHasval] = useState(false);
    

    const searchbook = (prop) => {
        prop.value = prop.value.replace('  ', '');
        console.log(prop.value);
        if (prop.value == "" || prop.value == " ") {
            setHasval(false);

        } else {
            axios.get(`${BaseUrl}api/book/search?keyword=${prop.value}`).then((res) => {
                setBooks(res.data.result);
                console.log(books);
                if (books.length === 0) {
                    setHasval(false);
                } else {
                    console.log(books.length);
                    setHasval(true);
                }
            }).catch((e) => {
                console.log(e);
            })
        }
    }
    const Navigate = useNavigate();
    return (
        <>
            <div className='top-navbar1'>
                <Link to='/productlist'
                    style={{
                        cursor: 'pointer',
                    }}
                >
                    <img
                        // src='https://image4.owler.com/logo/tatvasoft_owler_20160614_065459_original.png'
                        src='https://media.licdn.com/dms/image/C4D0BAQER56B5tk5JzA/company-logo_200_200/0/1519875638180?e=2147483647&v=beta&t=3O05G2LeTIHMXdERPXsSa2o0mogxmD20kDEbgTFMsvY'
                        alt='Tatvasoft Logo'
                        className='logo-style'
                    />
                </Link>
                <div className='nav1-links'>

                    <Link to='/bookpaglist' className='link-style' > Books </Link>|
                    <Link to='/updateprofile' className='link-style' > Update-Profile </Link>
                    <button className='cart-nav-btn'
                        style={{
                            marginLeft: '15px',
                        }}
                        onClick={() => {
                            Navigate('/cart');
                        }}
                    >
                        {/* <svg data-testid="ShoppingCartIcon"></svg> */}
                        <ShoppingCartIcon style={{
                            fontSize: 'large',
                            color: '#f14d54',
                            marginRight: '2px',
                        }} />

                        Cart</button>
                    <button className='cart-nav-btn'
                        onClick={() => {
                            // sessionStorage.removeItem('user');
                            sessionStorage.clear();
                            Navigate('/');
                        }}
                        style={{
                            marginLeft: '25px',
                        }}
                    >
                        Logout</button>
                    {/* <Link to='/err' className='link-navStyle' >404</Link> */}
                </div>
            </div>
            <div className='top-navbar2'>

                <div>
                    <TextField id="outlined-basic" name='search' label="What are you looking for... " variant="outlined"
                        style={{
                            width: '422px',
                            borderWidth: '0.5px',
                            color: 'rgb(33,33,33)',
                            backgroundColor: 'white',
                            position: 'relative',
                            height: '40px',
                            // left:'0%',

                        }}
                        size='small'
                        onChange={(val) => {
                            searchbook(val.target);
                        }}
                    />
                    <div>{hasval ? <div style={{
                        background: "#FCFEFE",
                        position: 'absolute',
                        zIndex: 1,
                        borderRadius: '7px',
                        width: '422px',
                        maxHeight: '500px',
                        overflow: 'scroll',
                        display: 'flex',
                        flexDirection: 'column',
                        rowGap: '5px'
                    }}>{books.map((option) => {
                        return (
                            <div className='search-res-div'>
                                <Grid
                                    style={{
                                        padding: '5px',
                                    }}
                                    // container spacing={2} columns={16}
                                    container rowSpacing={1}
                                    columnSpacing={{ xs: 1, sm: 2, md: 0 }}
                                >
                                    <Grid style={{
                                        // padding:'5px'
                                        fontWeight: 'bold',
                                    }} item xs={8}>
                                        {option.name}
                                    </Grid>
                                    <Grid style={{
                                        // padding:'5px',
                                        textAlign: 'right'
                                    }} item xs={4}>
                                        {option.price}
                                    </Grid>
                                    <Grid style={{
                                        // padding:'5px',
                                        color: '#838383'

                                    }} item xs={8}>
                                        {option.description}
                                    </Grid>
                                    <Grid style={{
                                        // padding:'5px',
                                        textAlign: 'right'
                                    }} item xs={4}>
                                        <Button
                                            style={{
                                                color: '#f14d54'
                                            }}
                                            variant='text'>Add To Cart</Button>
                                    </Grid>
                                </Grid>


                            </div>
                        );
                    })}</div> : <span></span>}</div>
                </div >
                <Button variant="contained" color="success"
                    size='small'
                    style={{
                        height: '40px',
                        marginLeft: '10px',
                    }}
                >
                    <SearchIcon />
                    Search</Button>
            </div >
        </>
    )
}

export default LogeedNav
