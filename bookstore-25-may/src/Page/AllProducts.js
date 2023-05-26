import React from "react";
import axios from "axios";
import BookCard from "../Component/BookCard";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";

const AllProducts = () => {
    var [books, setBooks] = useState([]);
    useEffect(() => {
        axios.get('https://book-e-sell-node-api.vercel.app/api/book/all').then((res) => {
            var a = res.data.result;
            console.log(a);
            setBooks(a);
            console.log(res.data.result);
            console.log(books);
        });

    }, []);
    return (
        <>
            <div style={{
                padding: '5px',
                display: 'grid',

            }}>

                <Grid container spacing={3}>

                    {/* {books.map((i) => {
                    return (
                        <div key={i.id}>
                            <BookCard

                                id={i.id}
                                name={i.name}
                                price={i.price}
                                image={i.image}
                                description={i.description}


                            />
                        </div>
                    );
                })} */}
                </Grid>

                {/* {user.map((item) => (
                    <div key={item.id}>
                        <h1>{item.title}</h1>
                        <p>{item.body}</p>
                    </div>
                ))} */}
            </div>
        </>
    );
}

export default AllProducts;