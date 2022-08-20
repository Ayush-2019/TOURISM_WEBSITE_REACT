import React, {useState, useEffect} from "react";
import {AppBar, Toolbar, IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { style } from "@mui/system";
import SideDrawer from './SideDrawer';
const Header =() => {

const [drawerOpen, setDrawerOpen] = useState(false);

const[headershow, setHeaderShow] = useState(false);

const handleScroll = () =>{
    if(window.scrollY){
            setHeaderShow(true);
    }
    else{
        setHeaderShow(false);
    };
}
const toggleDrawer = (status)=>{
    setDrawerOpen(status);
}


useEffect(() =>{
    window.addEventListener('scroll', handleScroll);
},[])
    return(
        <AppBar
        position="fixed" style = {{
            backgroundColor : headershow?'#2f2f2f':'transparent',
            color : headershow? 'white' : 'black',
            boxShadow : 'none',
            padding : '10px 0px'
        }

        }
        >
            <Toolbar>

            <div className="header_logo">

                <div className="font_righteous header_logo_venue">
                    The DreamLand
                </div>

                <div className="header_logo_title">Tourism Agency</div>
            </div>

            <IconButton
            aria-label="Menu" color="inherit" onClick={()=> toggleDrawer(true)}
            >
                <MenuIcon/>
            </IconButton>

            <SideDrawer open = {drawerOpen} onClose = {(status) => toggleDrawer(status)}
            />
            </Toolbar>

            
        </AppBar>
    )
}

export default Header;