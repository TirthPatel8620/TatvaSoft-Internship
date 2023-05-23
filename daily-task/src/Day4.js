import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import React, { useState } from "react"
import Input from '@mui/material/Input';
import { TextField } from "@mui/material";
import { Avatar } from "@mui/material";
import { Popover } from "@mui/material";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

export const Apple = () => {
    const [name, setName] = useState("Tony Stark");
    const [email, setEmail] = useState("tony@gmail.com");
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const Navigate = useNavigate();
    const onHomepageButtonclick = () => {
        console.log('button clicked');
        console.log('Name:', name);
        console.log('Email:', email);
        setOpen(false);
        setName("");
        setEmail("");
        // Navigate("/");

        // alert("btn has been clicked");
    };
    const handleclick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };
    // const handleclick=()={
    //     setOpen(ture);
    // }
    const handleclose = () => {
        setAnchorEl(null);
        setOpen(false);
    };
    return <><div style={{
        padding: 5,
    }}>
        <div style={{
            display: "flex",
            justifyContent: "flex-end",
            cursor: 'pointer',
            padding: '5px',
            alignItems: "center",

        }} onClick={handleclick}
        >
            <div
                // onClick={handleclick}
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    columnGap: 5,
                }}>
                <Avatar sx={{ bgcolor: "blue" }}>
                    TS
                </Avatar>
                {/* <span>Vicky Gandhi</span> */}
            </div>
        </div>
        <div
            style={{
                position: "relative",
                left: '20%',
                // border:'0.5px  black',
                boxShadow: '1px 2px 9px #F4AAB9',
                padding: 15,

                display: "flex",
                flexDirection: "column",
                rowGap: 10,
                width: '60%',

            }}>
            {/* Apple🍏 */}


            <TextField variant="outlined"
                style={{
                    borderRadius: '17px',

                }}
                value={name} label="Name" placeholder="Name" onChange={(e) => {
                    setName(e.target.value);
                }}></TextField>
            <TextField variant="outlined"
                style={{
                    borderRadius: '17px',

                }}
                value={email} label="Email" placeholder="Email " onChange={(e) => {
                    setEmail(e.target.value);
                }}></TextField>
            <Button
                style={{
                    borderRadius: '17px',

                }}
                variant="contained" onClick={onHomepageButtonclick} className=""> Submit</Button>
            {/* <button onClick={onHomepageButtonclick}>Navigate to Home Page🏡</button> */}
        </div>
    </div><Popover
        open={open}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        anchorEl={anchorEl}
        onClose={'handleclose'}

    >
            <div style={{
                padding: 5,
            }}> <h5>Tony Stark</h5>
                {/* <LogoutOutlinedIcon onClick={onHomepageButtonclick} /> */}
                <Button variant="contained" onClick={onHomepageButtonclick} className="">
                    <LogoutOutlinedIcon />
                </Button>


            </div>
        </Popover></>

}