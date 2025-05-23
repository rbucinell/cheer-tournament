"use client";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import {
    AppBar,
    Container,
    Toolbar,
    Typography,
    Box,
    IconButton,
    Menu,
    MenuItem,
    Button,
    Tooltip,
    Avatar
} from "@mui/material";
import { Adb as AdbIcon, Menu as MenuIcon } from '@mui/icons-material';
import React from "react";
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
export default function TopNavBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event: { currentTarget: React.SetStateAction<null>; }) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: { currentTarget: React.SetStateAction<null>; }) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Image src="/megaphone.png" alt={""} width={100} height={100}/>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>

                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{display: {xs: 'block', md: 'none'}}}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography sx={{textAlign: 'center'}}>{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{display: {xs: 'flex', md: 'none'}, mr: 1}}/>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: {xs: 'flex', md: 'none'},
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    > LOGO
                    </Typography>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{my: 2, color: 'white', display: 'block'}}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{flexGrow: 0}}>
                        <Tooltip title="Open settings">
                            <IconButton sx={{p: 0}}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{mt: '45px'}}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography sx={{textAlign: 'center'}}>{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>);
}
        {/*<div className="flex justify-between items-center p-4 bg-violet-700 text-white">*/}
        {/*    <h1 className="text-2xl font-bold">*/}
        {/*        <Link href="/">Cheer Tournament</Link>*/}
        {/*    </h1>*/}
        {/*    <div className="flex items-center">*/}
        {/*        <div className="container-fluid">*/}
        {/*            <a href="https://www.buymeacoffee.com/rbucinell" target="_blank">*/}
        {/*                <img src="https://cdn.buymeacoffee.com/buttons/v2/default-violet.png" alt="Buy Me A Coffee" className="h-14 w-56" />*/}
        {/*            </a>*/}
        {/*        </div>*/}
        {/*        <Script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="rbucinell" data-color="#BD5FFF" data-emoji=""  data-font="Cookie" data-text="Buy me a coffee" data-outline-color="#000000" data-font-color="#ffffff" data-coffee-color="#FFDD00" ></Script>*/}
        
        {/*    </div>*/}
        {/*</div>*/}
//     );
// }