import React from "react";
import { AppBar, Toolbar, Box, Typography } from "@material-ui/core"
import { Link, useHistory } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import './Navbar.css'

function Navbar() {
    const [token, setToken] = useLocalStorage('token');
    let history = useHistory();

    function goLogout() {
        setToken('');
        alert('Usuário foi deslogado com sucesso!!')
        history.push("/login");
    }



    return (
        <>

            <AppBar position="static">
                <Toolbar className="container" variant="dense">

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h5" color="inherit">
                                OtakuGeek
                            </Typography>
                        </Box>
                    </Box>


                    <Link to='/home' className='text-decorator-none navSpaceLeft navPadding'>
                        <Box display="flex" justifyContent="center">
                            <Box className="navPadding:hover cursor" mx={1} >
                                <Typography variant="h6" color="inherit">
                                    Home
                                </Typography>
                            </Box>
                        </Box>
                    </Link>

                    <Link to='/postagens' className='text-decorator-none'>
                        <Box className="navPadding navPadding:hover" display="flex" justifyContent="start">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Postagens
                                </Typography>
                            </Box>
                        </Box>
                    </Link>

                    <Link to='/temas' className='text-decorator-none'>
                        <Box className="navPadding navPadding:hover" display="flex" justifyContent="start">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Temas
                                </Typography>
                            </Box>
                        </Box>
                    </Link>

                    <Link to='/formularioTema' className='text-decorator-none'>
                        <Box className="navPadding navPadding:hover navSpaceRight" marginRight='auto' display="flex" justifyContent="start">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Criar Tema
                                </Typography>
                            </Box>
                        </Box>
                    </Link>

                   {/* <Link to='/login' className='text-decorator-none'>
                        <Box className="navPaddingCanto " display="flex" justifyContent="start">
                            <Box className="navPaddingCanto:hover cursor" mx={1}>
                                <Typography variant="h6" color="inherit">
                                    Login
                                </Typography>
                            </Box>
                        </Box>
                   </Link>*/}


                    <Box className="navPaddingCanto navSpaceLeft" display="flex" justifyContent="start" onClick={goLogout}>
                        <Box className="navPaddingCanto:hover " mx={1} paddingLeft= 'auto'>
                            <Typography className="navPaddingCanto:hover" variant="h6" color="inherit">
                                Logout
                            </Typography>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )

}

export default Navbar;